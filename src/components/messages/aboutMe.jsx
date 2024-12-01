"use client";

const AboutMe = ({ formData }) => {
  return (
    <div key="error" className="font-bold mb-2 text-sm md:text-sm lg:text-base">
      <p className="text-green-400">
        rupam@terminal : ~&nbsp;<span className="text-white">$</span> &nbsp;
        <span className="text-white font-normal ">{formData}</span>
      </p>
      <p>
        I&apos;m Rupam Pal, a 21-year-old software developer from Santragachi,
        Howrah, with a passion for building impactful digital solutions. I hold
        a BSc in IT with a specialization in Cyber Security from MAKAUT, where I
        developed a strong foundation in penetration testing, network testing,
        and software development. My technical expertise spans full-stack web
        development using the MERN stack, Next.js, and TypeScript. I have
        hands-on experience building robust authentication systems, creating
        dynamic UI designs with React and Tailwind CSS, and implementing
        responsive, user-friendly applications. Beyond coding, I enjoy exploring
        creative pursuits like cooking, listening to music, and designing
        innovative web applications. I&apos;m always eager to learn and grow,
        continuously refining my skills to tackle new challenges. Whether it’s
        collaborating with teams or working independently, I aim to deliver
        high-quality, efficient solutions that leave a positive impact.
      </p>
    </div>
  );
};

export default AboutMe;
