import React , {useState , useEffect , useRef} from 'react';
import { Link } from 'react-router-dom';

//  date formatter 
import {formatDate} from "../utils/DateFormatConvertor";

//  importing components
import Loader from './Loader';

//  importing fetchDta functions
import fetchData from "../utils/Api";

import LeftIcon from './LeftIcon';
import RightIcon from "./RightIcon";

// image imports
//  blog
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";

const BlogCarousel = () => {

    const scrollableBlogs = useRef(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [category, setCategory] = useState([]);

    const blogs = [
      {
        id: 1,
        title:
          "Revolutionising Healthcare: The Power of Custom Software Solutions",
        image: blog1,
        date: "Aug 30",
        type: "News & Trends",
      },
  
      {
        id: 2,
        title:
          "Interoperability in Healthcare: Bridging the Gap with Innovative Software",
        image: blog2,
        date: "Aug 30",
        type: "Technology",
      },
      {
        id: 3,
        title:
          "Enhancing Patient Engagement: How Suvarna's Solutions Empower Healthcare Providers",
        image: blog3,
        date: "Aug 30",
        type: "Research",
      },
      {
        id: 4,
        title:
          "Navigating Regulatory Compliance: A Guide to Healthcare Software Solutions",
        image: blog4,
        date: "Aug 30",
        type: "Legal & Regulatory",
      },
      {
        id: 5,
        title:
          "Revolutionising Healthcare: The Power of Custom Software Solutions",
        image: blog1,
        date: "Aug 30",
        type: "News & Trends",
      },
  
      {
        id: 6,
        title:
          "Interoperability in Healthcare: Bridging the Gap with Innovative Software",
        image: blog2,
        date: "Aug 30",
        type: "Technology",
      },
      {
        id: 7,
        title:
          "Enhancing Patient Engagement: How Suvarna's Solutions Empower Healthcare Providers",
        image: blog3,
        date: "Aug 30",
        type: "Research",
      },
      {
        id: 8,
        title:
          "Navigating Regulatory Compliance: A Guide to Healthcare Software Solutions",
        image: blog4,
        date: "Aug 30",
        type: "Legal & Regulatory",
      },
    ];


    //  fetcher functions

 
    useEffect(() => {
      setLoading(true);
      fetchData("get", "api/blog/get-all").then((res)=>{
        if(res){
        setData(res);
        setLoading(false);
      }
      }).catch((e)=>{
        console.error("ERROR" , e)
      });
      setLoading(true);
    }, [])

    useEffect(() => {
      setLoading(true);
      fetchData("get", "api/blog/blog_categorie/").then((res)=>{
        if(res){
        setCategory(res);
        setLoading(false);
      }
      }).catch((e)=>{
        console.error("ERROR" , e)
      });
      setLoading(true);
    }, [])
    

    //  states
    const [white, setWhite] = useState("#EBEDF0");
    const [black, setBlack] = useState("#001E41");
    const [left, setLeft] = useState(0);
  
    //  onclick functions
    const handleRight = () => {
      setLeft(1);
      setWhite("#001E41");
      setBlack("#EBEDF0");
    };
    const handleLeft = () => {
      setLeft(0);
      setWhite("#EBEDF0");
      setBlack("#001E41");
    };
    console.log(data);
    const scrollTo = (direction, amount, ref) => {
      if (ref.current) {
        const container = ref.current;
        const currentScrollLeft = container.scrollLeft;
        const targetScrollLeft =
          direction === "left"
            ? currentScrollLeft - amount
            : currentScrollLeft + amount;
        const duration = 500; // Animation duration in milliseconds, adjust as needed
        const startTime = performance.now();
  
        function scrollStep(timestamp) {
          const progress = (timestamp - startTime) / duration;
          if (progress < 1) {
            container.scrollLeft =
              currentScrollLeft +
              (targetScrollLeft - currentScrollLeft) * progress;
            requestAnimationFrame(scrollStep);
          } else {
            container.scrollLeft = targetScrollLeft;
          }
        }
  
        requestAnimationFrame(scrollStep);
      }
    };

  return (
    <div className="w-screen flex flex-col justify-center items-center  ">
    {/*  blog section header  */}
    <div className="w-screen flex items-center justify-center">
      <div className="lg:w-10/12 w-11/12 flex md:flex-row flex-col md:justify-between justify-center md:items-center items-start">
        <div className="flex flex-grow-1 justify-start items-center">
          <p className="w-5/6 flex flex-wrap text-[36px] font-bold">
            Check out our latest insights
          </p>
        </div>
        <div className="w-32 flex justify-center items-center">
          <div
            className="mx-2"
            onClick={() => {
              handleLeft();
              scrollTo("left", window.innerWidth / 4, scrollableBlogs);
            }}
          >
            {" "}
            <LeftIcon
              className="slider-3"
              color={white}
              stroke={black}
            />
          </div>

          <div
            className="mx-2"
            onClick={() => {
              handleRight();
              scrollTo("right", window.innerWidth / 4, scrollableBlogs);
            }}
          >
            <RightIcon
              className="slider-3"
              color={black}
              stroke={white}
            />
          </div>
        </div>
      </div>
    </div>

    {/* blog cards */}

    <div className="h-[583px] w-full flex flex-col justify-center items-center">
      {/*  product-card */}
      <div
        className="w-10/12 flex justify-start items-center overflow-hidden"
        ref={scrollableBlogs}
      >
        <div className="w-[4000px] flex justify-start items-center">
          {loading ? <div className='lg:w-10/12 md:w-11/12 w-screen h-full justify-center items-center'><Loader /></div> : data?.map((d, index) => {
            return (
              <div
                key={index}
                className="bg-white flex flex-col justify-center items-center h-[420px] w-[312px] overflow-hidden me-[24px] select-none"
                style={{
                  borderRadius: "12px",
                }}
              >
                <div className="h-1/2 overflow-hidden"
                  style={{
                    borderRadius: "12px",
                  }}
                >
                  <img
                    src={"https://".concat(
                      decodeURIComponent(d.image).slice(7)
                    )}
                    alt={d.title}
                  />
                </div>
                <div className="h-1/2 w-full flex flex-col justify-start items-start">
                  <div className="flex flex-col justify-start items-center h-1/2">
                    {/* title */}
                    <div className="font-medium md:text-[16px] text-[14px] text-[#3C4043] mt-[16px] mb-[12px] font-helvetica font-sans">
                      {d.title}
                    </div>

                    {/*  date and type */}
                    <div className="w-full blog-card-regular-text flex justify-start items-center">
                      <div>{formatDate(d.created_at)}</div>
                      <div className="mx-[12px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="4"
                          height="5"
                          viewBox="0 0 4 5"
                          fill="none"
                        >
                          <circle cx="2" cy="2.5" r="2" fill="#6D747A" />
                        </svg>
                      </div>
                      <div>{category[d.category-1]?.cat_title}</div>
                    </div>
                  </div>

                  <Link
                    to={`/blogs/${d.id}`}
                    className="product-card-button flex items-center justify-center my-4 text-[#146DFA] text-[16px] font-bold"
                  >
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      className="mx-1 w-[20px] h-[20px]"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3.3335 8H12.6668"
                        stroke="#146DFA"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 3.33331L12.6667 7.99998L8 12.6666"
                        stroke="#146DFA"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
  )
}

export default BlogCarousel