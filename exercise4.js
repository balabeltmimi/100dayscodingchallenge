const api =
  "https://asia-east2-skooldio-courses.cloudfunctions.net/es6/getUsers";

const getFirstUserImageUrl = async () => {
  try {
    const response = await fetch(api);
    const user = await response.json();
    const users = await user[0];
    try {
      const userResponse = await fetch(`${api}/${users}`);
      const Firstuser = await userResponse.json();
      try {
        const userImageResponse = await fetch(`${api}/image/${Firstuser.imageId}`);
        const userImage = await userImageResponse.json();
        console.log(userImage);
      } catch (error) {
        console.log("error when getting user image", error);
      }
    } catch (error) {
      console.log("error when getting user data", error);
    }
  } catch (error) {
    console.log("error when getting user image", error);
  }
};

getFirstUserImageUrl();