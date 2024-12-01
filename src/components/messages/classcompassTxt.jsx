"use client";

const ClasscompassTxt = ({ curFol, formData }) => {
  return (
    <div key="error" className="font-bold mb-2 text-sm md:text-sm lg:text-base">
      <p className="text-green-400">
        rupam@terminal :&nbsp;~{curFol}&nbsp;
        <span className="text-white">$</span> &nbsp;
        <span className="text-white font-normal">{formData}</span>
      </p>
      <p>
        <br />
        +++++++++++++++++++++++++++++
        <br />
        Txt Project <br /> +++++++++++++++++++++++++++++ <br />
        <br />
        *Overview
        <br />
        <span className="font-normal">
          ClassCompass is a dynamic web platform designed to connect teachers
          and students in an intuitive and efficient way. The platform
          facilitates seamless interactions by enabling students to find
          suitable tuition opportunities and allowing teachers to showcase their
          profiles and manage student applications. The project addresses the
          challenges of tuition searching and management, making it easier for
          both students and educators to achieve their goals.
        </span>
        <br />
        <br />
        ## Key Features ##
        <br />
        <span className="font-normal">
          + User Authentication and Authorization:
          <br />
          + Two distinct user roles: Teachers and Students.
          <br />+ Secure login and registration using Passport.js with
          passport-local and passport-local-mongoose.
        </span>
        <br />
        <br />
        ## Teacher Profiles ##
        <br />
        <span className="font-normal">
          + Teachers can create and customize profiles, including their
          subjects, qualifications, experience, and location.
          <br />+ A dedicated section for teachers to manage applications from
          students.
        </span>
        <br />
        <br />
        ## Student Portal ##
        <br />
        <span className="font-normal">
          + Students can search for teachers based on location, subjects, and
          other filters.
          <br />+ Ability to apply to teachers' profiles for tuitions.
        </span>
        <br />
        <br />
        ## Location-based Search ##
        <br />
        <span className="font-normal">
          + Integration with OpenStreetMap (using the Nominatim API) to provide
          autocomplete suggestions for locations.
          <br />+ Helps students and teachers find connections in their
          vicinity.
        </span>
        <br />
        <br />
        ## Responsive Design ##
        <br />
        <span className="font-normal">
          + Built with a focus on mobile-first design to ensure usability across
          devices.
          <br />+ Dynamic themes implemented using Tailwind CSS for a modern,
          customizable interface.
        </span>
        <br />
        <br />
        ## Backend Architecture ##
        <br />
        <span className="font-normal">
          + RESTful API design using Node.js and Express.js.
          <br />+ MongoDB database for storing user data, teacher profiles, and
          student applications.
        </span>
        <br />
        <br />
        ## Pagination ##
        <br />
        <span className="font-normal">
          + Enhanced user experience through paginated views, allowing users to
          browse large sets of data (e.g., teacher profiles or student
          applications) in smaller, manageable chunks.
        </span>
        <br />
        <br />
        ## Technologies Used ##
        <br />
        <span className="font-normal">
          + Frontend: React.js with Tailwind CSS.
          <br />
          + Backend: Node.js with Express.js.
          <br />
          + Database: MongoDB with Mongoose.
          <br />
          + Authentication: Passport.js.
          <br />
          + Location Services: OpenStreetMap API (Nominatim).
          <br />+ Deployment: Render for hosting backend services.
        </span>
      </p>
      <br />
    </div>
  );
};

export default ClasscompassTxt;
