import React from "react";
import styles from "./team.module.css";
import { Ring } from "@uiball/loaders";

export default function Team() {
  const [team, setTeam] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const teamid = e.target.teamid.value;
    setTeam(null);
    setLoading(true);
    await fetch("/api/team", {
      method: "POST",
      body: JSON.stringify({ id: teamid }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTeam(data.result.data);
      })
      .catch((err) => {
        console.log(err);
        setTeam(null);
      });
    setLoading(false);
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.tools}>
          <div className={styles.circle}>
            <span className={`${styles.red} ${styles.box}`}></span>
          </div>
          <div className={styles.circle}>
            <span className={`${styles.yellow} ${styles.box}`}></span>
          </div>
          <div className={styles.circle}>
            <span className={`${styles.green} ${styles.box}`}></span>
          </div>
        </div>
        <div className={styles.card__content}>
          <form onSubmit={handleSubmit}>
            <div className={styles.searchbar}>
              <div className={styles.url}>
                http://localhost:3000/api/v1/teams/
                <input
                  className={styles.input}
                  type="number"
                  name="teamid"
                  placeholder="{teamid}"
                  autoComplete="off"
                ></input>
              </div>

              <div className={styles.execute}>
                <button type="submit">📤</button>
              </div>
            </div>
          </form>

          <div>
            {team ? (
              <div className={styles.team}>
                <div className={styles.teamlogo}>
                  <img src={team.info.logo} alt="" draggable="false" />
                </div>
                <div className={styles.teamcontainer}>
                  <div className={styles.teaminfo}>
                    <div className={styles.teamname}>{team.info.name}</div>
                    <div className={styles.teamtag}>{team.info.tag}</div>
                    <div className={styles.players}>
                      {team.players.map((player) => (
                        <div className={styles.player} key={player.user}>
                          <img src={player.img} alt="" draggable="false" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={styles.lastmatches}>
                    <div className={styles.lastmatchestitle}>Last games</div>
                    {team.results.slice(0, 2).map((match) => (
                      <div className={styles.match} key={match.event.name}>
                        <div className={styles.teamimg}>
                          <img
                            src={match.teams[0].logo}
                            alt=""
                            draggable="false"
                          />
                        </div>

                        <div className={styles.matchscore}>
                          {" "}
                          {match.teams[0].points} - {match.teams[1].points}{" "}
                        </div>

                        <div className={styles.teamimg}>
                          <img
                            src={match.teams[1].logo}
                            alt=""
                            draggable="false"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.noteam}>
                {loading ? (
                  <Ring size={40} lineWeight={5} speed={2} color="white" />
                ) : (
                  "Enter the team's ID to see its information."
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
