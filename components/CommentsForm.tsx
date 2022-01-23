import React, { useState, useRef, useEffect } from 'react';
import { submitComment } from '@/services/index';

interface SlugType {
  slug: string;
}

const CommentsForm = ({ slug }: SlugType) => {
  const [error, setError] = useState(false);
  // const [localStorage, setLocalStorage]: any = useState();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const commentEl: any = useRef();
  const nameEl: any = useRef();
  const emailEl: any = useRef();
  const storeDataEl: any = useRef();

  useEffect(() => {
    if (window.localStorage.getItem('storeData')) {
      nameEl.current.value = window.localStorage.getItem('name');
      emailEl.current.value = window.localStorage.getItem('email');
      storeDataEl.current.checked = window.localStorage.getItem('storeData');
    }
  }, []);

  const handleSubmit = () => {
    setError(false);

    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email);
      window.localStorage.setItem('storeData', storeData);
    } else {
      window.localStorage.removeItem('name');
      window.localStorage.removeItem('email');
      window.localStorage.setItem('storeData', storeData);
    }

    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <div className='bg-white shadow-lg rounded-lg px-8 py-4 pb-8 mb-4'>
      <h3 className='text-xl mb-4 font-semibold border-b pb-4'>Leave a Reply</h3>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea
          ref={commentEl}
          className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
          placeholder='Comment'
          name='comment'
          rows={4}
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
        <input
          type='text'
          ref={nameEl}
          className=' py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
          placeholder='Name'
          name='name'
        />

        <input
          type='text'
          ref={emailEl}
          className=' py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
          placeholder='Email'
          name='email'
        />
      </div>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <div>
          <input
            type='checkbox'
            ref={storeDataEl}
            id='storeDataID'
            name='storeData'
            value='true'
            className='mr-4'
          />
          <label className='text-gray-500 cursor-pointer' htmlFor='storeDataID'>
            Save my Name and Email for the next time I comment.
          </label>
        </div>
      </div>
      {error && <p className='text-xs text-red-500 float-right'>All Field are Required</p>}
      <div className='mt-4'>
        <button
          type='button'
          onClick={handleSubmit}
          className='transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-6 py-1 cursor-pointer'
        >
          Post Comment
        </button>
        {showSuccessMessage && (
          <span className='text-xl float-right font-semibold mt-2 text-green-500 '>
            Comment Submitted for review
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
