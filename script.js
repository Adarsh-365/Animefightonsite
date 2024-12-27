function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./Images/ezgif-frame-001.jpg
     ./Images/ezgif-frame-002.jpg
     ./Images/ezgif-frame-003.jpg
     ./Images/ezgif-frame-004.jpg
     ./Images/ezgif-frame-005.jpg
     ./Images/ezgif-frame-006.jpg
     ./Images/ezgif-frame-007.jpg
     ./Images/ezgif-frame-008.jpg
     ./Images/ezgif-frame-009.jpg
     ./Images/ezgif-frame-010.jpg
     ./Images/ezgif-frame-011.jpg
     ./Images/ezgif-frame-012.jpg
     ./Images/ezgif-frame-013.jpg
     ./Images/ezgif-frame-014.jpg
     ./Images/ezgif-frame-015.jpg
     ./Images/ezgif-frame-016.jpg
     ./Images/ezgif-frame-017.jpg
     ./Images/ezgif-frame-018.jpg
     ./Images/ezgif-frame-019.jpg
     ./Images/ezgif-frame-020.jpg
     ./Images/ezgif-frame-021.jpg
     ./Images/ezgif-frame-022.jpg
     ./Images/ezgif-frame-023.jpg
     ./Images/ezgif-frame-024.jpg
     ./Images/ezgif-frame-025.jpg
     ./Images/ezgif-frame-026.jpg
     ./Images/ezgif-frame-027.jpg
     ./Images/ezgif-frame-028.jpg
     ./Images/ezgif-frame-029.jpg
     ./Images/ezgif-frame-030.jpg
     ./Images/ezgif-frame-031.jpg
     ./Images/ezgif-frame-032.jpg
     ./Images/ezgif-frame-033.jpg
     ./Images/ezgif-frame-034.jpg
     ./Images/ezgif-frame-035.jpg
     ./Images/ezgif-frame-036.jpg
     ./Images/ezgif-frame-037.jpg
     ./Images/ezgif-frame-038.jpg
     ./Images/ezgif-frame-039.jpg
     ./Images/ezgif-frame-040.jpg
     ./Images/ezgif-frame-041.jpg
     ./Images/ezgif-frame-042.jpg
     ./Images/ezgif-frame-043.jpg
     ./Images/ezgif-frame-044.jpg
     ./Images/ezgif-frame-045.jpg
     ./Images/ezgif-frame-046.jpg
     ./Images/ezgif-frame-047.jpg
     ./Images/ezgif-frame-048.jpg
     ./Images/ezgif-frame-049.jpg
     ./Images/ezgif-frame-050.jpg
     ./Images/ezgif-frame-051.jpg
     ./Images/ezgif-frame-052.jpg
     ./Images/ezgif-frame-053.jpg
     ./Images/ezgif-frame-054.jpg
     ./Images/ezgif-frame-055.jpg
     ./Images/ezgif-frame-056.jpg
     ./Images/ezgif-frame-057.jpg
     ./Images/ezgif-frame-058.jpg
     ./Images/ezgif-frame-059.jpg
     ./Images/ezgif-frame-060.jpg
     ./Images/ezgif-frame-061.jpg
     ./Images/ezgif-frame-062.jpg
     ./Images/ezgif-frame-063.jpg
     ./Images/ezgif-frame-064.jpg
     ./Images/ezgif-frame-065.jpg
     ./Images/ezgif-frame-066.jpg
     ./Images/ezgif-frame-067.jpg
     ./Images/ezgif-frame-068.jpg
     ./Images/ezgif-frame-069.jpg
     ./Images/ezgif-frame-070.jpg
     ./Images/ezgif-frame-071.jpg
     ./Images/ezgif-frame-072.jpg
     ./Images/ezgif-frame-073.jpg
     ./Images/ezgif-frame-074.jpg
     ./Images/ezgif-frame-075.jpg
     ./Images/ezgif-frame-076.jpg
     ./Images/ezgif-frame-077.jpg
     ./Images/ezgif-frame-078.jpg
     ./Images/ezgif-frame-079.jpg
     ./Images/ezgif-frame-080.jpg
     ./Images/ezgif-frame-081.jpg
     ./Images/ezgif-frame-082.jpg
     ./Images/ezgif-frame-083.jpg
     ./Images/ezgif-frame-084.jpg
     ./Images/ezgif-frame-085.jpg
     ./Images/ezgif-frame-086.jpg
     ./Images/ezgif-frame-087.jpg
     ./Images/ezgif-frame-088.jpg
     ./Images/ezgif-frame-089.jpg
     ./Images/ezgif-frame-090.jpg
     ./Images/ezgif-frame-091.jpg
     ./Images/ezgif-frame-092.jpg
     ./Images/ezgif-frame-093.jpg
     ./Images/ezgif-frame-094.jpg
     ./Images/ezgif-frame-095.jpg
     ./Images/ezgif-frame-096.jpg
     ./Images/ezgif-frame-097.jpg
     ./Images/ezgif-frame-098.jpg
     ./Images/ezgif-frame-099.jpg
     ./Images/ezgif-frame-100.jpg
     ./Images/ezgif-frame-101.jpg
     ./Images/ezgif-frame-102.jpg
     ./Images/ezgif-frame-103.jpg
     ./Images/ezgif-frame-104.jpg
     ./Images/ezgif-frame-105.jpg
     ./Images/ezgif-frame-106.jpg
     ./Images/ezgif-frame-107.jpg
     ./Images/ezgif-frame-108.jpg
     ./Images/ezgif-frame-109.jpg
     ./Images/ezgif-frame-110.jpg
     ./Images/ezgif-frame-111.jpg
     ./Images/ezgif-frame-112.jpg
     ./Images/ezgif-frame-113.jpg
     ./Images/ezgif-frame-114.jpg
     ./Images/ezgif-frame-115.jpg
     ./Images/ezgif-frame-116.jpg
     ./Images/ezgif-frame-117.jpg
     ./Images/ezgif-frame-118.jpg
     ./Images/ezgif-frame-119.jpg
     ./Images/ezgif-frame-120.jpg
     ./Images/ezgif-frame-121.jpg
     ./Images/ezgif-frame-122.jpg
     ./Images/ezgif-frame-123.jpg
     ./Images/ezgif-frame-124.jpg
     ./Images/ezgif-frame-125.jpg
     ./Images/ezgif-frame-126.jpg
     ./Images/ezgif-frame-127.jpg
     ./Images/ezgif-frame-128.jpg
     ./Images/ezgif-frame-129.jpg
     ./Images/ezgif-frame-130.jpg
     ./Images/ezgif-frame-131.jpg
     ./Images/ezgif-frame-132.jpg
     ./Images/ezgif-frame-133.jpg
     ./Images/ezgif-frame-134.jpg
     ./Images/ezgif-frame-135.jpg
     ./Images/ezgif-frame-136.jpg
     ./Images/ezgif-frame-137.jpg
     ./Images/ezgif-frame-138.jpg
     ./Images/ezgif-frame-139.jpg
     ./Images/ezgif-frame-140.jpg
     ./Images/ezgif-frame-141.jpg
     ./Images/ezgif-frame-142.jpg
     ./Images/ezgif-frame-143.jpg
     ./Images/ezgif-frame-144.jpg
     ./Images/ezgif-frame-145.jpg
     ./Images/ezgif-frame-146.jpg
     ./Images/ezgif-frame-147.jpg
     ./Images/ezgif-frame-148.jpg
     ./Images/ezgif-frame-149.jpg
     ./Images/ezgif-frame-150.jpg
     ./Images/ezgif-frame-151.jpg
     ./Images/ezgif-frame-152.jpg
     ./Images/ezgif-frame-153.jpg
     ./Images/ezgif-frame-154.jpg
     ./Images/ezgif-frame-155.jpg
     ./Images/ezgif-frame-156.jpg
     ./Images/ezgif-frame-157.jpg
     ./Images/ezgif-frame-158.jpg
     ./Images/ezgif-frame-159.jpg
     ./Images/ezgif-frame-160.jpg
     ./Images/ezgif-frame-161.jpg
     ./Images/ezgif-frame-162.jpg
     ./Images/ezgif-frame-163.jpg
     ./Images/ezgif-frame-164.jpg
     ./Images/ezgif-frame-165.jpg
     ./Images/ezgif-frame-166.jpg
     ./Images/ezgif-frame-167.jpg
     ./Images/ezgif-frame-168.jpg
     ./Images/ezgif-frame-169.jpg
     ./Images/ezgif-frame-170.jpg
     ./Images/ezgif-frame-171.jpg
     ./Images/ezgif-frame-172.jpg
     ./Images/ezgif-frame-173.jpg
     ./Images/ezgif-frame-174.jpg
     ./Images/ezgif-frame-175.jpg
     ./Images/ezgif-frame-176.jpg
     ./Images/ezgif-frame-177.jpg
     ./Images/ezgif-frame-178.jpg
     ./Images/ezgif-frame-179.jpg
     ./Images/ezgif-frame-180.jpg
     ./Images/ezgif-frame-181.jpg
     ./Images/ezgif-frame-182.jpg
     ./Images/ezgif-frame-183.jpg
     ./Images/ezgif-frame-184.jpg
     ./Images/ezgif-frame-185.jpg
     ./Images/ezgif-frame-186.jpg
     ./Images/ezgif-frame-187.jpg
     ./Images/ezgif-frame-188.jpg
     ./Images/ezgif-frame-189.jpg
     ./Images/ezgif-frame-190.jpg
     ./Images/ezgif-frame-191.jpg
     ./Images/ezgif-frame-192.jpg
     ./Images/ezgif-frame-193.jpg
     ./Images/ezgif-frame-194.jpg
     ./Images/ezgif-frame-195.jpg
     ./Images/ezgif-frame-196.jpg
     ./Images/ezgif-frame-197.jpg
     ./Images/ezgif-frame-198.jpg
     ./Images/ezgif-frame-199.jpg
     ./Images/ezgif-frame-200.jpg
     ./Images/ezgif-frame-201.jpg
     ./Images/ezgif-frame-202.jpg
     ./Images/ezgif-frame-203.jpg
     ./Images/ezgif-frame-204.jpg
     ./Images/ezgif-frame-205.jpg
     ./Images/ezgif-frame-206.jpg
     ./Images/ezgif-frame-207.jpg
     ./Images/ezgif-frame-208.jpg
     ./Images/ezgif-frame-209.jpg
     ./Images/ezgif-frame-210.jpg
     ./Images/ezgif-frame-211.jpg
     ./Images/ezgif-frame-212.jpg
     ./Images/ezgif-frame-213.jpg
     ./Images/ezgif-frame-214.jpg
     ./Images/ezgif-frame-215.jpg
     ./Images/ezgif-frame-216.jpg
     ./Images/ezgif-frame-217.jpg
     ./Images/ezgif-frame-218.jpg
     ./Images/ezgif-frame-219.jpg
     ./Images/ezgif-frame-220.jpg
     ./Images/ezgif-frame-221.jpg
     ./Images/ezgif-frame-222.jpg
     ./Images/ezgif-frame-223.jpg
     ./Images/ezgif-frame-224.jpg
     ./Images/ezgif-frame-225.jpg
     ./Images/ezgif-frame-226.jpg
     ./Images/ezgif-frame-227.jpg
     ./Images/ezgif-frame-228.jpg
     ./Images/ezgif-frame-229.jpg
     ./Images/ezgif-frame-230.jpg
     ./Images/ezgif-frame-231.jpg
     ./Images/ezgif-frame-232.jpg
     ./Images/ezgif-frame-233.jpg
     ./Images/ezgif-frame-234.jpg
     ./Images/ezgif-frame-235.jpg
     ./Images/ezgif-frame-236.jpg
     ./Images/ezgif-frame-237.jpg
     ./Images/ezgif-frame-238.jpg
     ./Images/ezgif-frame-239.jpg
     ./Images/ezgif-frame-240.jpg
     ./Images/ezgif-frame-241.jpg
     ./Images/ezgif-frame-242.jpg
     ./Images/ezgif-frame-243.jpg
     ./Images/ezgif-frame-244.jpg
     ./Images/ezgif-frame-245.jpg
     ./Images/ezgif-frame-246.jpg
     ./Images/ezgif-frame-247.jpg
     ./Images/ezgif-frame-248.jpg
     ./Images/ezgif-frame-249.jpg
     ./Images/ezgif-frame-250.jpg
     ./Images/ezgif-frame-251.jpg
     ./Images/ezgif-frame-252.jpg
     ./Images/ezgif-frame-253.jpg
     ./Images/ezgif-frame-254.jpg
     ./Images/ezgif-frame-255.jpg
     ./Images/ezgif-frame-256.jpg
     ./Images/ezgif-frame-257.jpg
     ./Images/ezgif-frame-258.jpg
     ./Images/ezgif-frame-259.jpg
     ./Images/ezgif-frame-260.jpg
     ./Images/ezgif-frame-261.jpg
     ./Images/ezgif-frame-262.jpg
     ./Images/ezgif-frame-263.jpg
     ./Images/ezgif-frame-264.jpg
     ./Images/ezgif-frame-265.jpg
     ./Images/ezgif-frame-266.jpg
     ./Images/ezgif-frame-267.jpg
     ./Images/ezgif-frame-268.jpg
     ./Images/ezgif-frame-269.jpg
     ./Images/ezgif-frame-270.jpg
     ./Images/ezgif-frame-271.jpg
     ./Images/ezgif-frame-272.jpg
     ./Images/ezgif-frame-273.jpg
     ./Images/ezgif-frame-274.jpg
     ./Images/ezgif-frame-275.jpg
     ./Images/ezgif-frame-276.jpg
     ./Images/ezgif-frame-277.jpg
     ./Images/ezgif-frame-278.jpg
     ./Images/ezgif-frame-279.jpg
     ./Images/ezgif-frame-280.jpg
     ./Images/ezgif-frame-281.jpg
     ./Images/ezgif-frame-282.jpg
     ./Images/ezgif-frame-283.jpg
     ./Images/ezgif-frame-284.jpg
     ./Images/ezgif-frame-285.jpg
     ./Images/ezgif-frame-286.jpg
     ./Images/ezgif-frame-287.jpg
     ./Images/ezgif-frame-288.jpg
     ./Images/ezgif-frame-289.jpg
     ./Images/ezgif-frame-290.jpg
     ./Images/ezgif-frame-291.jpg
     ./Images/ezgif-frame-292.jpg
     ./Images/ezgif-frame-293.jpg
     ./Images/ezgif-frame-294.jpg
     ./Images/ezgif-frame-295.jpg
     ./Images/ezgif-frame-296.jpg
     ./Images/ezgif-frame-297.jpg
     ./Images/ezgif-frame-298.jpg
     ./Images/ezgif-frame-299.jpg
     ./Images/ezgif-frame-300.jpg
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})