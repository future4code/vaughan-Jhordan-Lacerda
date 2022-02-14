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
    const url = `${BASE_URL}/:jhordan/person`;

    axios
      .get(url)
      .then((res) => {
        console.log(res.data)
        setProfile(res.data.profile);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const ChoosePerson = (decision) => {
    const url = `${BASE_URL}/:jhordan/choose-person`;
    if (decision) {
      const body = {
        id: profile.id,
        choice: true,
      };

      axios
        .post(url, body)
        .then((res) => {
          console.log(res.data);
          getProfileToChoose();
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      const body = {
        id: profile.id,
        choice: false,
      };

      axios
        .post(url, body)
        .then((res) => {
          console.log(res.data);
          getProfileToChoose();
        })
        .catch((err) => {
          alert(err);
        });
    }
  };
  
  return (
    <>
      <ProfileCard profile={profile} />
      <ChooseButtons ChoosePerson={ChoosePerson} />
    </>
  );
}
