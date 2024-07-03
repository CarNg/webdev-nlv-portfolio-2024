"use client";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function ProjectBullets({
  tech,
  players,
  playTime,
  onProjectCard = false,
}) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const maxBullets =
    isSmallScreen && tech && tech.length > 3 ? 3 : tech ? tech.length : 0;

  return (
    <div className={`flex ${onProjectCard ? "justify-end" : "justify-start"}`}>
      {tech &&
        tech.map((t, i) => {
          if (i < maxBullets) {
            return (
              <div className="flex items-center" key={t}>
                <div className={`${onProjectCard ? "text-sm" : ""}`}>{t}</div>
                {i < maxBullets - 1 && (
                  <span className="exception text-3xl leading-none mx-0.5">
                    &#183;
                  </span>
                )}
              </div>
            );
          }
        })}
      {players && playTime && (
        <>
          <div
            className={`flex items-center ${onProjectCard ? "text-sm" : ""}`}
          >
            {players} players
            <span className="exception text-3xl leading-none mx-0.5">
              &#183;
            </span>
            {playTime} mins
          </div>
        </>
      )}
    </div>
  );
}
