import React, { Component, Fragment } from "react";
import Axios from "axios";
import ".././styles.css";
import Modal from "./Modal";
// import swal from "sweetalert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
// import { faSync } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      name: "",
      harga: "",
      rating: "",
      jumlah: "",
      waktu: "",
      datas: [],
      per_page: "5",
      current_page: "",
      total_pages: "",
      formName: "",
      userId: "",
      status: "",
      search: "",
      pizza: "",
      index: ""
    };
    console.log("constructor");
  }

  onPreviousHandle = () => {
    console.log("tombol sebelumnya sudah di Klik");
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/populer/all?page=${
      this.state.current_page - 1
    }`;
    Axios.get(url)
      .then((response) => {
        console.log("Data Berhasil didapatkan", response);
        this.setState({
          datas: response.data.data,
          per_page: response.data.meta.per_page,
          current_page: response.data.meta.current_page,
          total_pages: response.data.meta.total_pages,
          index: "3"
        });
        console.log(
          "Anda berada di data yang ke-",
          response.data.meta.current_page
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onNextHandle = () => {
    console.log("tombol selanjutnya sudah di klik");
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/populer/all?page=${
      this.state.current_page + 1
    }`;
    Axios.get(url)
      .then((response) => {
        console.log("Data Berhasil didapatkan", response);
        this.setState({
          datas: response.data.data,
          per_page: response.data.meta.per_page,
          current_page: response.data.meta.current_page,
          total_pages: response.data.meta.total,
          index: "2"
        });
        console.log(
          "Anda berada di data yang ke-",
          response.data.meta.current_page
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  change = (event) => {
    const sc = event.target.value;
    this.setState({
      search: sc
    });
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/populer/all/${sc}`;
    console.log("keyword", sc);
    Axios.get(url).catch((error) => {
      return (error = false);
    });
  };

  masakan() {
    console.log("makanan!!!");
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/populer/all`;
    Axios.get(url).then((res) => {
      console.log(res);
    });
  }

  pizza = (event) => {
    console.log("makanan!!!");
    this.setState({
      pizza: "pizza"
    });
    const name = "pizza";
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/populer/3`;
    Axios.post(url)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // jus() {
  //   console.log("makanan!!!");
  //   this.setState({
  //     search: "juz"
  //   });
  //   const url = `https://belajar-react.smkmadinatulquran.sch.id/api/populer/cari/juz`
  //   Axios.get(url)
  //   .then((response)=>{
  //     console.log("Data Berhasil didapatkan", response);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // }

  populer() {
    console.log("popular items");
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/populer/all`;
    Axios.get(url)
      .then((response) => {
        console.log("Data Berhasil didapatkan", response);
        this.setState({
          datas: response.data.data,
          per_page: response.data.meta.per_page,
          current_page: response.data.meta.current_page,
          total_pages: response.data.meta.total_pages
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    console.log("componentDidMount");
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/populer/all`;
    Axios.get(url)
      .then((response) => {
        console.log("Data Berhasil didapatkan", response);
        this.setState({
          datas: response.data.data,
          per_page: response.data.meta.per_page,
          current_page: response.data.meta.current_page,
          total_pages: response.data.meta.total_pages
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-9 position-relative pb-3 pr-4">
              <nav className="navbar py-3 px-4">
                <div className="row">
                  <div className="col-3 text-left">
                    <div className="navbar-brand text-dark">
                      <span className="font-weight-light">
                        <FontAwesomeIcon icon={faBars} />
                      </span>
                      &nbsp;
                      <span className="s5">MyKantin</span>
                    </div>
                  </div>
                  <div className="col-8 float-right">
                    <div className="input-group p-1 rounde bg-light">
                      <span className="p-2">
                        <FontAwesomeIcon icon={faSearch} />
                      </span>
                      <input
                        type="text"
                        name="in"
                        id="in"
                        className="form-control bg-transparent m-0 rounded border-0 text-capitalize"
                        placeholder="cari makan bang?"
                        onChange={this.change}
                      />
                    </div>
                  </div>
                </div>
              </nav>
              <div className="row">
                <div className="col">
                  <div className="card round border-0 bg-yoi">
                    <div className="card-body oren text-left p-4">
                      <div className="row">
                        <div className="col-4 text-center">
                          <img
                            id="big"
                            src="https://i.ibb.co/hVbvd4p/undraw-breakfast-psiw-2.png"
                            alt="none"
                          />
                        </div>
                        <div className="col-8 py-4">
                          <h3 className="fb font-weight-bold">
                            Promo Hari Ini
                          </h3>
                          <h5 className="f">Perut Kenyang, hati senang</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12 m-4">
                  <div className="float-left">
                    <h4 className="font-weight-bold fb">Kategori</h4>
                  </div>
                  <div className="float-right mr-5">
                    <button className="btn float-right rounded-pill px-3 font-weight-light text-light f">
                      Lebih Lengkap
                    </button>
                  </div>
                </div>
              </div>
              <div className="row yey m-1 text-center">
                <div
                  className="col-3 px-2 rounde gcover"
                  onClick={this.componentDidMount}
                >
                  <div
                    className="card py-5 rounde card-category bg-transparent text-light border-0 p-0"
                    id="semua"
                  >
                    <div className="card-body a f">Semua</div>
                  </div>
                </div>
                <div
                  className="col-3 px-2 rounde gcover"
                  onClick={this.masakan}
                >
                  <div
                    className="card py-5 rounde card-category bg-transparent text-light border-0"
                    id="masakan"
                  >
                    <div className="card-body a f">Masakan</div>
                  </div>
                </div>
                <div
                  className="col-3 px-2 rounde gcover"
                  value="pizza"
                  onClick={this.pizza}
                >
                  <div
                    className="card py-5 rounde card-category bg-transparent text-light border-0"
                    id="pija"
                  >
                    <div className="card-body a f">Pizza</div>
                  </div>
                </div>
                <div className="col-3 px-2 rounde gcover" onClick={this.jus}>
                  <div
                    className="card py-5 rounde card-category bg-transparent text-light border-0"
                    id="jus"
                  >
                    <div className="card-body a f">Jus</div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12 m-4 mr-5">
                  <div className="float-left">
                    <h4 className="font-weight-bold fb">Populer</h4>
                  </div>
                </div>
              </div>
              <div className="row m-1">
                {this.state.datas
                  .filter((data) =>
                    data.name
                      .toLowerCase()
                      .includes(this.state.search.toLowerCase())
                  )
                  .map((data, index) => (
                    <div className="col-3 my-2 px-2 rounde">
                      <div
                        className="card pt-5 gcover rounde border-0"
                        id=""
                        style={{ backgroundImage: "url(" + data.image + ")" }}
                        data-toggle="modal"
                        data-target="#exampleModal"
                        onClick={() => {
                          this.setState({
                            name: data.name,
                            image: data.image,
                            harga: data.harga,
                            waktu: data.waktu,
                            jumlah: data.jumlah,
                            rating: data.rating,
                            status: "Update"
                          });
                        }}
                      >
                        <div className="card-body mt-4 pb-2 pl-2 pt-4">
                          <span className="f name bg-light rounde py-1 px-3">
                            {data.waktu}
                          </span>
                        </div>
                      </div>
                      <p className="f makanan m-2 pb-0">{data.name}</p>
                      <p className="f name mx-2 mb-3">
                        <FontAwesomeIcon icon={faStar} /> &nbsp;
                        <span className="name">{data.rating}</span> &nbsp;
                        <span className="makanan ml-3">Rp. {data.harga}</span>
                      </p>
                    </div>
                  ))}
              </div>
              <div className="row mb-4 mt-3 px-5">
                <div className="col-12">
                  <div className="float-right mb-0">
                    <nav>
                      <ul className="pagination">
                        <li className="page-item">
                          <button
                            onClick={this.onPreviousHandle}
                            className="page-link text-dark"
                          >
                            <FontAwesomeIcon icon={faChevronLeft} /> &nbsp;
                            Previous
                          </button>
                        </li>
                        <li className="page-item">
                          <button
                            onClick={this.onNextHandle}
                            className="page-link text-dark"
                          >
                            Next &nbsp;
                            <FontAwesomeIcon icon={faChevronRight} />
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 bg-light fixed-right">
              <nav className="navbar bg-transparent">
                <div className="row py-2">
                  <div className="col-3"></div>
                  <div className="col-3">
                    <div className="text-center p-2 mt-1">
                      <FontAwesomeIcon icon={faHeart} />
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="rounded-cirle bg-warning d3 text-center p-1 mt-2">
                      <span className="">3</span>
                    </div>
                  </div>
                  <div className="col-3 float-right">
                    <div className="">
                      <img
                        className="rounded-circle profil"
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </nav>
              <div className="container">
                <div className="row">
                  <div className="col m-2">
                    <h4 className="fb">Pesanan Saya</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col fb">
                    <div className="card cardi rounde p-0 text-light font-weight-light">
                      <div className="card-body m-0">
                        <p className="name">Mr : A. Khaidir Muktamar</p>
                        <h4>Rp. 100.000.000,-</h4>
                        <br />
                        <p className="name">
                          3 7 5 8 * * * * * * * * * * * 8 9 1 3
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <Modal
                updateTable={this.updateTable}
                status={this.state.status}
                name={this.state.name}
                image={this.state.image}
                waktu={this.state.waktu}
                harga={this.state.harga}
                jumlah={this.state.jumlah}
                rating={this.state.rating}
                formName={this.state.formName}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
