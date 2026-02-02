// schemas/job.js
export default {
    name: 'job',
    title: 'Job Openings',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Job Title',
        type: 'string',
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string',
      },
    ],
  }