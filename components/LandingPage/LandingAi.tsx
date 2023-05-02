import React from 'react';

class LandingAi extends React.Component {
  render() {
    return (
      <>
        <div className='container py-5'>
          <div className='row py-md-5'>
            <div className='col-md-6'></div>
            <div className='col-md-6'>
              <h3 className='font-w-900 display-4'>AI Builder</h3>
              <p className='text-muted'>
                Are you struggling to find the right words for your resume? Our
                AI resume builder can find them in no time! It’s powered by
                OpenAI’s GPT, the world’s most powerful language model, and it
                can automatically produce text indistinguishable from human
                writers. Say goodbye to writer’s block. Generate the first draft
                of your resume in seconds
              </p>
              <ul className='list-group list-group-horizontal'>
                <li className='list-group-item small'> Powered by GPT</li>
                <li className='list-group-item small'> Generated in seconds</li>
                <li className='list-group-item small'>
                  {' '}
                  Produces human-like-text
                </li>
                <li className='list-group-item small'>
                  {' '}
                  Nobody&lsquo;s gonna know
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LandingAi;
