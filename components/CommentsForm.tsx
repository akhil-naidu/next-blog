import React, { useState, useRef, useEffect } from "react";
import { submitComment } from "@/services/index";

interface PostIdType {
  postId: number;
}

const CommentsForm = ({ postId }: PostIdType) => {
  const [error, setError] = useState(false);
  // const [localStorage, setLocalStorage]: any = useState();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const commentEl: any = useRef();
  const nameEl: any = useRef();
  const emailEl: any = useRef();
  const storeDataEl: any = useRef();

  useEffect(() => {
    if (window.localStorage.getItem("storeData")) {
      nameEl.current.value = window.localStorage.getItem("name");
      emailEl.current.value = window.localStorage.getItem("email");
      storeDataEl.current.checked = window.localStorage.getItem("storeData");
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
      postId,
    };

    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
      window.localStorage.setItem("storeData", storeData);
    } else {
      window.localStorage.removeItem("name");
      window.localStorage.removeItem("email");
      window.localStorage.setItem("storeData", storeData);
    }

    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <div className="mb-4 rounded-lg bg-white px-8 py-4 pb-8 shadow-lg">
      <h3 className="mb-4 border-b pb-4 text-xl font-semibold">
        Leave a Reply
      </h3>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <textarea
          ref={commentEl}
          className="w-full rounded-lg bg-gray-100 p-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Comment"
          name="comment"
          rows={4}
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <input
          type="text"
          ref={nameEl}
          className=" w-full rounded-lg bg-gray-100 py-2 px-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Name"
          name="name"
        />

        <input
          type="text"
          ref={emailEl}
          className=" w-full rounded-lg bg-gray-100 py-2 px-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <div>
          <input
            type="checkbox"
            ref={storeDataEl}
            id="storeDataID"
            name="storeData"
            value="true"
            className="mr-4"
          />
          <label className="cursor-pointer text-gray-500" htmlFor="storeDataID">
            Save my Name and Email for the next time I comment.
          </label>
        </div>
      </div>
      {error && (
        <p className="float-right text-xs text-red-500">
          All Field are Required
        </p>
      )}
      <div className="mt-4">
        <button
          type="button"
          onClick={handleSubmit}
          className="ease inline-block cursor-pointer rounded-full bg-pink-600 px-6 py-1 text-lg text-white transition duration-500 hover:bg-indigo-900"
        >
          Post Comment
        </button>
        {showSuccessMessage && (
          <span className="float-right mt-2 text-xl font-semibold text-green-500 ">
            Comment Submitted for review
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
