import Swal from "sweetalert2";

const handleTypingAuth = async (e, phoneNumber, captchaToken, navigate) => {
  e.preventDefault();

  Swal.fire({
    title: "Confirm Phone Number",
    text: `A login password will be sent to ${phoneNumber} via WhatsApp. Do you want to continue?`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        // Send phoneNumber to the server
        const response = await fetch(
          "https://asia-southeast2-awangga.cloudfunctions.net/domyid/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              phonenumber: phoneNumber,
              captcha: captchaToken,
            }),
          }
        );

        const responseData = await response.json();

        // Check if the response is not OK (status code outside 200-299 range)
        if (!response.ok) {
          if (response.status === 401) {
            await Swal.fire({
              icon: "warning",
              title: "Login Failed",
              text: responseData.status,
              showConfirmButton: false,
              timer: 2000,
            }).then(() => {
              navigate("/qrauth")
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Login Failed",
              text: responseData.status,
            });
          }
          return;
        }

        // Display success message
        Swal.fire({
          icon: "success",
          title: `${responseData.message}`,
          text: `A login password has been sent to ${responseData.phonenumber}!`,
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          // Navigate to STP page with phoneNumber as state
          navigate("/stp", { state: { phoneNumber } });
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
        });
      }
    }
  });
};

export default handleTypingAuth;
