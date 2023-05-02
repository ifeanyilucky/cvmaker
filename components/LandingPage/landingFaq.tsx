import React from 'react';
import styled from 'styled-components';

interface FaqProps {
  answer: string;
  question: string;
}
const faqs: FaqProps[] = [
  {
    question: 'What is CV',
    answer: `CV is an abbreviation of the Latin words 'curriculum vitae', which mean 'life course'. A professional CV provides a summary and a good overview of someone's life.
<br/>
        Your CV includes your education(s) and qualifications, work experience, skills, and important qualities. By means of your CV, your potential employer will be able to get a good picture of your skills, work experience, and knowledge quickly, to assess whether or not you fit the job, and therefore whether to offer you a job interview`,
  },
  {
    question: 'What is the difference between a CV and a resume?',
    answer: `The term resume is not so common in the United Kingdom, where the term cv is used. The term is more common in the United States and Canada. The documents, however, share a similar goal; landing a job interview for an employee and being able to see quickly whether a candidate is qualified for an open position for an employer. That said, there are a few key differences between a curriculum vitae and a resume;

        - The length of the document; a cv is more elaborate, it usually covers two pages. A resume is usually no longer than one page.
        
        - The amount of detail; a cv is more detailed and complete, where the resume focusses on only giving the most relevant information for this specific application. Resulting in the aforementioned difference.
        
        - The tone of the document; a resume can be a more commercial and focussed on selling one-self, where a cv is more factual.`,
  },
  {
    question: 'How do I start writing my CV',
    answer:
      'Let’s face it; writing a CV can be a daunting task. If you need some help, have a look at our page with cv examples. The page templates on the page can easily be modified to fit your personal situation. If that doesn’t help, you could also consider our cv writing service.',
  },
  {
    question: 'What should I include in my curriculum vitae?',
    answer: `Your CV should only contain information relevant to your potential employer. So that means, what should be in your cv can differ per application. However, the bare minimum of details on your cv should at least include;
        Personal details
        Of course, your new employers should be able to contact you for a job interview. Therefore, you always start by mentioning your full name and email address and (mobile) phone number. Also mention your place of residence and address, as an employer might prefer an employee living nearby. In case a driver's license is required for the role, also mention it. In case you have a representative LinkedIn profile or personal website, you can include a link to it in the personal details section.
        
        Work experience
        In an a-chronological order, list your latest work experience. Start with your latest job and continue with the jobs you worked at before. Per job, give a short clear summary of your tasks, responsibilities and skills. Tip: try and list skills and responsibilities most relevant to the role you’re applying for!
        
        Education
        Just like the previous overview of work experience, start of with your last study or highest level of education. Also name the school or institution where you studied, the starting date and date of graduation.
        
        The aforementioned parts should be present on any CV, at any application. However, you if you really want to stand out from other applicants, it is strongly advisable to put in a little more effort. You want potential employers to see that you are the best fit for the job. Therefore, consider adding the following sections to your cv;
        
        Personal statement or cv profile
        Most modern cv’s include a short introductory paragraph called personal statement or profile. In this paragraph, which is read by most recruiters, you will get the chance to sell yourself in a few sentences; the kind of role you are looking for, your qualities and ambitions. Also check out our blog on writing a personal profile for more help.
        
        Competencies and skills
        All jobs are different of course. However, during your career, you gain competencies and skills which are transferable. These strong personal traits are gained through experience and will help you execute any other job more efficiently. Read more about listing skills on your cv here.
        
        Courses and work-related trainings
        Some employers offer courses or trainings to improve certain skills of their employees. If you have followed any and they’ve improved skills or competencies that are relevant for your new job, make sure to include them. Make sure to mention whether you earned a diploma or certificate!
        
        Activities
        You can also gain certain skills and competencies in a non-professional setting. For instance by doing voluntary work as a coach, trainer or accountant for a club or organization. If you have done these activities during your study, they are referred to as an extracurricular activity. Make sure to list them including the skills you gained.`,
  },
  {
    question: 'How to make your own CV (or application letter)',
    answer: `You can create a CV with your own word processing program such as Microsoft Word, and then convert it to PDF format. Search the Internet for a free CV example or CV template and see if you can replicate it. Or, use our CV maker where you can simply enter your data and your perfect CV will be available for download in just 15 minutes. Of course, the same can be done to create an accompanying application letter, too!
        
        When you have completed your CV and application letter, you will be able to send both - along with an accompanying email - to the vacancy you wish to apply for.`,
  },
  {
    question: 'Tips for creating the perfect CV',
    answer: `Within our CV maker page, you will find tips with each section to help make your CV the best it can be. Along with these, here are some general tips:

        - Only mention relevant information that will add value to the application for the vacancy you are applying for, or that will be of interest to future employers.
        - Do not mention hobbies or interests that will raise awkward questions.
        - State the most important information on the first page. Include a concise personal profile about yourself.
        - Use bullet points and numbered lists to your advantage by making your CV transparent to recruiters.
        - Always choose the chronological CV structure, unless otherwise requested in the vacancy.
        - Keep your CV short and powerful. Mention important information concisely.
        - Keep an eye on our blog for more CV and job application tips!`,
  },
];

class LandingFaq extends React.Component {
  state: { info: number } = {
    info: 0,
  };
  render(): React.ReactNode {
    const { info } = this.state;
    return (
      <Wrapper>
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='col-md-3 pb-5'>
              <h3 className='font-w-900'>Information</h3>

              {faqs.map((faq: FaqProps, idx: number) => (
                <h5
                  key={idx}
                  className={info === idx ? 'font-w-900' : 'info-question'}
                  onClick={() => this.setState({ info: idx })}
                >
                  {faq.question}
                </h5>
              ))}
            </div>
            <div className='col-md-9'>
              <div className='paper'>
                <div className='paper-content'>
                  <h3 className='font-w-900 mb-4'>{faqs[info].question}</h3>
                  <p>{faqs[info].answer}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}
export default LandingFaq;
const Wrapper = styled.div`
  position: relative;
  /* padding: 5rem 0; */
  padding-top: 5rem;
  height: 100%;
  background-color: #f0f0f0;
  .info-question {
    margin: 20px 0;
    cursor: pointer;
  }
  .paper {
    min-width: 695px;
    max-width: 695px;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.1) -10px 20px 30px;
    padding: 60px;
    background-color: #fff;
    /* height: 509px; */
    /* position: absolute; */
    bottom: 0;
  }
  @media (max-width: 991px) {
    display: none;
  }
`;
