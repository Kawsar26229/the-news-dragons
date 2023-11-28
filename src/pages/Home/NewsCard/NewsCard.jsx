/* eslint-disable react/prop-types */
import moment from "moment";
import { Card, Image } from "react-bootstrap";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, total_view, rating } = news;
  return (
    <Card className="my-4">
      <Card.Header className="d-flex align-items-center">
        <Image src={author?.img} style={{ height: "40px" }} roundedCircle />
        <div className="ps-3 flex-grow-1 align-items-center py-2">
          <p className="mb-0 fw-semibold">{author?.name}</p>
          <p className="mb-0 text-secondary">
            <small>{moment(author?.published_date).format("YYYY-MM-D")}</small>
          </p>
        </div>
        <div>
          <FaRegBookmark />
          <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img className="my-4" variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <> {details}</>
          ) : (
            <>
              {details.slice(0, 250)}...{" "}
              <Link
                to={`/news/${_id}`}
                className="text-danger text-decoration-none fw-semibold"
              >
                Read More
              </Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex align-items-center">
        <div className="flex-grow-1 fw-semibold">
          <Rating
            placeholderRating={rating.number}
            readonly
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          ></Rating>
          <span className="ms-2">{rating?.number}</span>
        </div>
        <div className="fw-semibold">
          <FaEye /> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
