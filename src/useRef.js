

import React, { useState, useEffect, useRef } from 'react';

export default function UseRef() {

//     const [like, setLike] = useState(0);

//   useEffect(() => {});

//   const handleClick = () => {
//     setLike(like + 1);
//   };

//   const getLikeValue = () => {
//     setTimeout(() => {
//       alert(like);
//     }, 2000);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>+</button>
//       <button>{like} 👍</button>
//       <button onClick={getLikeValue}>获得like值</button>
//     </div>
//   );

  const [like, setLike] = useState(0);
  const likeRef = useRef(0);

  useEffect(() => {});

  const handleClick = () => {
    setLike(like + 1);
    likeRef.current = likeRef.current + 1;
  };

  const getLikeValue = () => {
    setTimeout(() => {
      alert(likeRef.current);
    }, 2000);
  };

  return (
    <div>
      <button onClick={handleClick}>+</button>
      <button>{like} 👍</button>
      <button onClick={getLikeValue}>获得like值</button>
    </div>
  );
}
