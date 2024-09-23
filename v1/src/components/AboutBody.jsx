
const paragraphStyle = {
    fontFamily: 'Roboto',
    color: 'lightgrey',
    fontSize: '18px',
    fontWeight: 100,
    lineHeight: 1.5
};

const AboutBody = () => {
    return (
        <>
            <p style={paragraphStyle}>👋 Hi, my name's Lorenzo! I'm based in Sydney, Australia.</p>

            <p style={paragraphStyle}>🔎 Currently, I'm a Software Engineer at Service NSW working on the Savings Finder project.</p>

            <p style={paragraphStyle}>💻 I used to work as a Graduate Software Engineer at Honeywell, a Junior Software Engineer at ServiceRocket/Digital Presence, and as an IT Support Specialist at Epiroc, being part of many amazing and super friendly teams that I always look back at.</p>

            <p style={paragraphStyle}>🎓 I'm also a computer science alumni from The University of New South Wales. Within the degree, I partook in numerous group projects in multiple subjects revolving around the concept of software development, having gained experience with an agile style of workflow with a variety of both interesting and amazing people. I was also a common fellow within UNSW's computer science society (UNSW CSESoc), attending many events such as their multiple coding competitions and industry-based meetups.</p>

            <p style={paragraphStyle}><b>I enjoy being a software engineer because:</b></p>

            <p style={paragraphStyle}>• I take pleasure in knowing that I've made a positive impact on a scalable amount of people</p>

            <p style={paragraphStyle}>• I find it satisfying to discuss, listen, and contribute to the philosophy as to why significant decisions are made in very specific systems and how those decisions create value and impact in the long run</p>

            <p style={paragraphStyle}>• I love making things just look aesthetically good at a frontend level and codebase level (with both readability and maintainability over a long timeline)</p>

            <p style={paragraphStyle}>• I enjoy the team aspect of software development with the concept of having a role and making my teammates' lives less stressful by playing that role as best as I can</p>

            <p style={paragraphStyle}><b>Technological Skills:</b></p>

            <p style={paragraphStyle}>• <b>Languages:</b> TypeScript, JavaScript, HTML, CSS, Java, Python, SQL, C, C++</p>

            <p style={paragraphStyle}>• <b>Frameworks and Databases:</b> React, Firebase, Express.js, Flask, MongoDB, MySQL, PostreSQL</p>

            <p style={paragraphStyle}>• <b>Tools:</b> Git, Linux, AWS(DynamoDB, S3, CloudFormation), Jira/Confluence, CI/CD/GitHub Actions</p>

            <p style={paragraphStyle}>☕ If you have any inquiries, feel free to send me a message via. the contact me page!</p>
        </>
    )
}

export default AboutBody;
