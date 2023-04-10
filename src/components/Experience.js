import { Typography } from '@mui/material';

function Experience(props) {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'ABC Company',
      description: 'Worked as a full-stack developer on various client projects.',
      startDate: 'Jan 2019',
      endDate: 'Present'
    },
    {
      title: 'Web Developer',
      company: 'XYZ Inc.',
      description: 'Developed and maintained websites for small businesses.',
      startDate: 'Jun 2017',
      endDate: 'Dec 2018'
    },
    // Add more experiences here...
  ];

  return (
    <div style={{padding:50}}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Experience
      </Typography>

      {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}> */}
        {/* Vertical timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {experiences.map((experience) => (
            <div key={experience.title} style={{ position: 'relative', marginBottom: '32px' }}>
              <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#1976d2', position: 'absolute', left: '-10px', top: '50%', transform: 'translateY(-50%)' }}></div>
              <div style={{ padding: '16px', border: '1px solid #e0e0e0', borderRadius: '4px', textAlign: 'right' }}>
                <Typography variant="subtitle1" component="h2" gutterBottom>{experience.title}</Typography>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>{experience.company}</Typography>
                <Typography variant="body1" paragraph>{experience.description}</Typography>
                <Typography variant="caption">{`${experience.startDate} - ${experience.endDate}`}</Typography>
              </div>
            </div>
          ))}
        </div>

        {/* Experience details */}
        {/* <div style={{ maxWidth: '800px' }}> */}
          {/* Add your experience details here */}
        {/* </div>
      </div> */}
    </div>
  );
}

export default Experience;
