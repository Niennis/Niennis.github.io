$(document).ready(function() {
  let colors = new Array(
    [27,186,135],
    [55, 222, 228],
    [26, 122, 114],
    [69, 173, 168]);

  let step = 0;
  // color table indices for: 
  // current color left
  // next color left
  // current color right
  // next color right
  let colorIndices = [0, 1, 2, 3];

  // transition speed
  let gradientSpeed = 0.002;

  function updateGradient() {
    let c00 = colors[colorIndices[0]];
    let c01 = colors[colorIndices[1]];
    let c10 = colors[colorIndices[2]];
    let c11 = colors[colorIndices[3]];

    let istep = 1 - step;
    let r1 = Math.round(istep * c00[0] + step * c01[0]);
    let g1 = Math.round(istep * c00[1] + step * c01[1]);
    let b1 = Math.round(istep * c00[2] + step * c01[2]);
    let color1 = '#' + ((r1 << 16) | (g1 << 8) | b1).toString(16);

    let r2 = Math.round(istep * c10[0] + step * c11[0]);
    let g2 = Math.round(istep * c10[1] + step * c11[1]);
    let b2 = Math.round(istep * c10[2] + step * c11[2]);
    let color2 = '#' + ((r2 << 16) | (g2 << 8) | b2).toString(16);

    $('#gradient').css({background: '-webkit-radial-gradient(80% 10%, circle, ' + color1 + ', transparent), -webkit-radial-gradient(80% 50%, circle, ' + color2 + ', transparent)'});

    step += gradientSpeed;
    if (step >= 1) {
      step %= 1;
      colorIndices[0] = colorIndices[1];
      colorIndices[2] = colorIndices[3];
      
      // pick two new target color indices
      // do not pick the same as the current one
      colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
      colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
    }
  } setInterval(updateGradient, 10);
});