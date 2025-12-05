import { useState } from "react";
import { Link } from "react-router-dom";

export default function Side() {
  const [active, setActive] = useState(null);

  return (
    <div className="relative w-dvw h-dvh overflow-hidden">
      <div
        className="absolute inset-0 kiri-side overflow-hidden"
        onMouseEnter={() => setActive("left")}
        onMouseLeave={() => setActive(null)}
      >
        <div
          className={`
      absolute inset-0 duration-300
      ${
        active === "left"
          ? "scale-110 translate-x-4"
          : active === "right"
          ? "scale-110 -translate-x-3"
          : "scale-110"
      }
    `}
        >
          <Link to="/StreetRace">
            {" "}
            <img src="/faction.jpg" className="w-full h-full object-cover" />
          </Link>

          {active === "right" && (
            <div className="absolute inset-0 bg-black opacity-60"></div>
          )}
        </div>

        <div
          className={`
      absolute top-[760px] w-full h-[150px] z-30 transition-all duration-300
      ${
        active === "left"
          ? "bg-white"
          : active === "right"
          ? "bg-black"
          : "bg-white"
      }
    `}
        >
          <div className="absolute  z-40 left-100 top-10">
            <h1
              className={` text-black text-6xl
               ${
                 active === "left"
                   ? "text-white"
                   : active === "right"
                   ? "text-white"
                   : "text-black"
               }
            
            
            `}
            >
              POLICE
            </h1>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-0 kanan-side overflow-hidden"
        onMouseEnter={() => setActive("right")}
        onMouseLeave={() => setActive(null)}
      >
        <div
          className={`
      absolute inset-0 duration-300
      ${
        active === "right"
          ? "scale-110 -translate-x-3"
          : active === "left"
          ? "scale-110 translate-x-4"
          : "scale-110"
      }
    `}
        >
          <Link to="/Police">
            <img src="/faction.jpg" className="w-full h-full object-cover" />{" "}
          </Link>

          {active === "left" && (
            <>
              <div className="absolute inset-0 bg-black opacity-60 z-20"></div>

              {/* <div className="absolute text-[20px] text-white font-bold z-30">
                <h1>halo</h1>
              </div> */}
            </>
          )}
        </div>

        <div
          className={`
      absolute top-[760px] w-full h-[150px] z-30 transition-all duration-300
      ${
        active === "right"
          ? "bg-white"
          : active === "left"
          ? "bg-black"
          : "bg-black"
      }
    `}
        >
          <div className="absolute  z-40 right-100 top-10">
            <h1
              className={`POLICE text-white text-6xl
              
                    ${
                      active === "right"
                        ? "text-white"
                        : active === "left"
                        ? "text-black"
                        : "text-white"
                    }
              `}
            >
              STREET RACE
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
