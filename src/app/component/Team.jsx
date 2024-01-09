import React from "react";
import Image from "next/image";
import "./team.css";

function Team() {
  return (
    <section id="team" className="teamSection paddingSection ">
      <div className="container">
        <div className="team_text flex justify-center flex-col text-center items-center mb-16">
          <h2 className="mb-10 text-3xl lg:text-2xl">OUR TEAM</h2>
          <p className="w-5/6 lg:w-1/2 description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            velit maxime officiis neque, repellendus molestiae, maiores soluta
            vitae tenetur a autem porro quos iste laboriosam quae debitis dolore
            sint repellat.
          </p>
        </div>

        <div className="team_items flex gap-20 flex-col lg:flex-row">
          <div className="team1 overflow-hidden relative">
            <Image
              className="image_team"
              src="image/item1.jpg"
              width={600}
              height={600}
              alt="vape men team leader"
            ></Image>
            <div className="box_info">
              <h3 className="mb-5">TEAM LEADER</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, rem.
              </p>
            </div>
          </div>
          <div className="team2 overflow-hidden relative">
            <Image
              className="image_team"
              src="image/item2.jpg"
              width={600}
              height={600}
              alt="vape woman leader"
            ></Image>
            <div className="box_info">
              <h3 className="mb-5">TEAM LEADER</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, rem.
              </p>
            </div>
          </div>
          <div className="team3 overflow-hidden relative">
            <Image
              className="image_team "
              src="image/item3.jpg"
              width={600}
              height={600}
              alt="vape woman"
            ></Image>
            <div className="box_info">
              <h3 className="mb-5">TEAM LEADER</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, rem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
