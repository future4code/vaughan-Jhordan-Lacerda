import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../Constants/urls";
import ProfileCard from "../ProfileCard/ProfileCard";
import ChooseButtons from "../ChooseButtons/ChooseButtons";

export default function ChooseProfilePage() {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    getProfileToChoose();
  }, []);

  const getProfileToChoose = () => {
    const url = `${BASE_URL}/:jhorda/person `;
    axios
      .get(url)
      .then((res) => {
        console.log("alo", res.data.profile);
        setProfile(res.data.profile);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <>
      <ProfileCard profile={profile} />
      <ChooseButtons />
    </>
  );
}
