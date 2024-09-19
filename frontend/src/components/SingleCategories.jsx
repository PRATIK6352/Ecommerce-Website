  import { Link } from 'react-router-dom';

  function SingleCategories(props) {
    console.log(props);
    const category = props.category;
    const imgStyle = {
      width: '100%',
      height: '30vh', 
      maxHeight: '250px', 
      objectFit: 'cover', 
    };

    return (
      <>
        <div className="col-12 col-md-3 mb-4">
          <div className="card">
          
            <div className="card-body">
              <Link to={`/category/${category.title}/${category.id}`}><h3 className="card-title">{category.title}</h3></Link>
            </div>
          
          </div>
        </div>
      </>
    );
  }

  export default SingleCategories;
