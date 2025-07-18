import React from "react";

const OrbitingDotsLoading = ({
  size = "20px",
  color = "currentColor",
  speed = "1.5s",
}) => {
  // Inline styles for dynamic custom properties
  const containerStyle: { [key: string]: string } = {
    "--uib-size": size,
    "--uib-color": color,
    "--uib-speed": speed,
    "--uib-dot-size": `calc(${size} * 0.4)`,
  };

  return (
    <div className="orbit-container" style={containerStyle}>
      <div className="orbit-dot orbit-dot-1"></div>
      <div className="orbit-dot orbit-dot-2"></div>

      <style>{`
        .orbit-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: var(--uib-dot-size);
          width: var(--uib-size);
        }

        .orbit-dot {
          position: absolute;
          height: var(--uib-dot-size);
          width: var(--uib-dot-size);
          border-radius: 50%;
          background-color: var(--uib-color);
          flex-shrink: 0;
          transition: background-color 0.3s ease;
        }

        .orbit-dot-1 {
          animation: orbit var(--uib-speed) linear infinite;
        }

        .orbit-dot-2 {
          animation: orbit var(--uib-speed) linear calc(var(--uib-speed) / -2) infinite;
        }

        @keyframes orbit {
          0% {
            transform: translateX(calc(var(--uib-size) * 0.25)) scale(0.73684);
            opacity: 0.65;
          }
          5% {
            transform: translateX(calc(var(--uib-size) * 0.235)) scale(0.684208);
            opacity: 0.58;
          }
          10% {
            transform: translateX(calc(var(--uib-size) * 0.182)) scale(0.631576);
            opacity: 0.51;
          }
          15% {
            transform: translateX(calc(var(--uib-size) * 0.129)) scale(0.578944);
            opacity: 0.44;
          }
          20% {
            transform: translateX(calc(var(--uib-size) * 0.076)) scale(0.526312);
            opacity: 0.37;
          }
          25% {
            transform: translateX(0%) scale(0.47368);
            opacity: 0.3;
          }
          30% {
            transform: translateX(calc(var(--uib-size) * -0.076)) scale(0.526312);
            opacity: 0.37;
          }
          35% {
            transform: translateX(calc(var(--uib-size) * -0.129)) scale(0.578944);
            opacity: 0.44;
          }
          40% {
            transform: translateX(calc(var(--uib-size) * -0.182)) scale(0.631576);
            opacity: 0.51;
          }
          45% {
            transform: translateX(calc(var(--uib-size) * -0.235)) scale(0.684208);
            opacity: 0.58;
          }
          50% {
            transform: translateX(calc(var(--uib-size) * -0.25)) scale(0.73684);
            opacity: 0.65;
          }
          55% {
            transform: translateX(calc(var(--uib-size) * -0.235)) scale(0.789472);
            opacity: 0.72;
          }
          60% {
            transform: translateX(calc(var(--uib-size) * -0.182)) scale(0.842104);
            opacity: 0.79;
          }
          65% {
            transform: translateX(calc(var(--uib-size) * -0.129)) scale(0.894736);
            opacity: 0.86;
          }
          70% {
            transform: translateX(calc(var(--uib-size) * -0.076)) scale(0.947368);
            opacity: 0.93;
          }
          75% {
            transform: translateX(0%) scale(1);
            opacity: 1;
          }
          80% {
            transform: translateX(calc(var(--uib-size) * 0.076)) scale(0.947368);
            opacity: 0.93;
          }
          85% {
            transform: translateX(calc(var(--uib-size) * 0.129)) scale(0.894736);
            opacity: 0.86;
          }
          90% {
            transform: translateX(calc(var(--uib-size) * 0.182)) scale(0.842104);
            opacity: 0.79;
          }
          95% {
            transform: translateX(calc(var(--uib-size) * 0.235)) scale(0.789472);
            opacity: 0.72;
          }
          100% {
            transform: translateX(calc(var(--uib-size) * 0.25)) scale(0.73684);
            opacity: 0.65;
          }
        }
      `}</style>
    </div>
  );
};

export default OrbitingDotsLoading;
