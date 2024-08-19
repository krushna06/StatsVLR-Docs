import React from "react";
import styles from "./team.module.css";
import { Ring } from "@uiball/loaders";

export default function Player() {
  const [player, setPlayer] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const playerid = e.target.teamid.value;
    setPlayer(null);
    setLoading(true);
    await fetch("/api/player", {
      method: "POST",
      body: JSON.stringify({ id: playerid }),
    })
      .then((res) => res.json())
      .then((data) => {
        setPlayer(data.result.data);
      })
      .catch((err) => {
        console.log(err);
        setPlayer(null);
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
                https://statsvlr.n0step.xyz/api/v1/players/
                <input
                  className={styles.input}
                  type="number"
                  name="teamid"
                  placeholder="{playerid}"
                  autoComplete="off"
                ></input>
              </div>

              <div className={styles.execute}>
                <button type="submit">📤</button>
              </div>
            </div>
          </form>

          <div>
            {player ? (
              <div className={styles.team}>
                <div className={styles.teamlogo}>
                  <img
                    src={player.info.img}
                    alt={player.info.user}
                    draggable="false"
                  />
                </div>
                <div className={styles.teamcontainer}>
                  <div className={styles.teaminfo}>
                    <div className={styles.playertitle}>
                      <div className={styles.teamname}>{player.info.user}</div>
                      <img
                        src={`https://flagcdn.com/20x15/${player.info.flag}.png`}
                        alt={player.info.country}
                        draggable="false"
                      />
                    </div>
                    <div className={styles.teamtag}>{player.info.name}</div>

                    <div className={styles.teamtag}>
                      <a
                        href={player.socials.twitter_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {player.socials.twitter}
                      </a>
                    </div>
                    <div className={styles.teamtag}>
                      <a
                        href={player.socials.twitch_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {player.socials.twitch}
                      </a>
                    </div>
                  </div>
                  <img
                    className={styles.teamlogo}
                    src={player.team.logo}
                    alt={player.team.name}
                    title={player.team.name}
                    draggable="false"
                  />
                </div>
              </div>
            ) : (
              <div className={styles.noteam}>
                {loading ? (
                  <Ring size={40} lineWeight={5} speed={2} color="white" />
                ) : (
                  "Enter the player's ID to see its information."
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
