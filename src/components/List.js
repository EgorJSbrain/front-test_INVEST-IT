import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { photosAllRequest } from '../actions/photos'
import { Photo } from './Photo'

const PER_PAGE = 30

const List = () => {
  const observerTarget = useRef(null);
  const dispatch = useDispatch();
  const { list, total, isLoading } = useSelector(state => state.app);
  const [page, setPage] = useState(1)

  useEffect(() => {
    if (total && page > 1 && page <= Math.ceil(total / PER_PAGE)) {
      dispatch(photosAllRequest({ perPage: PER_PAGE, page: page }))
    }
  }, [page, total])

  useEffect(() => {
    dispatch(photosAllRequest({ perPage: PER_PAGE, page: page }))
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setPage(page => page + 1)
        }
      },
      { threshold: 1 }
    );
  
    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }
  
    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget]);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <div
        style={{
          minHeight: "90vh",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: '100px',
          padding: '32px',
        }}>

        {list?.map(image =>
          <Photo
            key={image.id}
            authorName={`${image.user?.first_name ?? ''} ${image.user?.last_name ?? ''}`}
            link={image.urls?.small}
          />
        )}
      </div>

      {isLoading && !!list.length && 
        <div
          style={{
            width: '100%',
            height: '120px',
            display: 'flex',
            justifyContent: 'center'
        }}>
          {'Loading...'}
        </div>}

      <div style={{ width: '100%', backgroundColor: 'blue' }} ref={observerTarget} />
    </div>)
};

export default List;
