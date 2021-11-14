import "./HazakuraLogo.css";

function HazakuraLogo() {
  return (
    <div class="logo-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="200"
        height="200"
        viewBox="0 0 172 172"
        style={{ fill: "#fe2036", opacity:"90%" }}
      >
        <g
          fill="none"
          fill-rule="nonzero"
          stroke="none"
          stroke-width="1"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-miterlimit="10"
          stroke-dasharray=""
          stroke-dashoffset="0"
          font-family="Lora"
          font-weight="none"
          font-size="250%"
          text-anchor="middle"
          style={{ "mix-blend-mode": "normal" }}
        >
          <path d="M0,172v-172h172v172z" fill="none"></path>
          <g fill="#fe2036" opacity="90%">
          {/* rgb(254, 32, 56) fe2036ed*/}
            <path d="M86,14.33333c-39.58041,0 -71.66667,32.08626 -71.66667,71.66667c0,39.58041 32.08626,71.66667 71.66667,71.66667c39.58041,0 71.66667,-32.08626 71.66667,-71.66667c0,-39.58041 -32.08626,-71.66667 -71.66667,-71.66667z"></path>
          </g>
        </g>
      </svg>
      <div className="logo-name">
        <span>Hazakura</span>
        <span>Travel ❀ 葉桜</span>
      </div>
    </div>
  );
}

export default HazakuraLogo;
