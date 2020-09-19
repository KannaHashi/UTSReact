import Axios from "axios";
import React, { Fragment } from "react";
import { Component } from "react";
import swal from "sweetalert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ".././styles.css";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      name: "",
      harga: "",
      rating: "",
      jumlah: "",
      waktu: "",
      isLoading: false,
      isProcess: false
    };
  }

  componentDidUpdate(prevProps) {
    console.log("prevProps", prevProps.name);
    console.log("props saat ini", this.props.name);

    if (prevProps.name !== this.props.name) {
      if (this.props.status === "Add") {
        console.log("ADD FUNCTION");
        this.setState({
          username: "",
          name: "",
          email: "",
          jenis_kelamin: ""
        });
      } else {
        console.log("name", this.props.name);
        const name = this.props.name;
        this.setState({
          name: this.props.name,
          waktu: this.props.waktu,
          harga: this.props.harga,
          rating: this.props.rating,
          image: this.props.image,
          jumlah: this.props.jumlah
        });
        const url = `https://belajar-react.smkmadinatulquran.sch.id/api/populer/${name}`;
        Axios.get(url)
          .then((response) => {
            console.log("response", response.data.data.name);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }

  onInputHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmitHandle = (event) => {
    event.preventDefault();
    this.setState({
      isLoading: true
    });
    console.log("form sudah di submit");

    console.log("Siap Update");
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/update`;
    const payload = {
      image: this.state.image,
      waktu: this.state.waktu,
      jumlah: this.state.jumlah,
      harga: this.state.harga,
      rating: this.state.rating
    };
    Axios.put(url, payload)
      .then((response) => {
        console.log("Berhasil", response);
        this.props.updateTable();
        swal("Updated!", {
          icon: "success"
        });
      })
      .catch((error) => {
        swal("Error");
        console.log(error);
      });
  };

  // onPost(url, payload){

  // }

  render() {
    const empty = {
      fontFamily:
        "FontAwesome, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
      fontstyle: "normal",
      fontWeight: "normal",
      textDecoration: "inherit"
    };
    return (
      <Fragment>
        <div className="modal-body">
          <div className="container-fluid">
            <div className="row p-0">
              <div className="col-12 p-0">
                <div
                  className="card high p-0 m-0 gcover border-0"
                  id=""
                  // style={{ backgroundImage: "url(" + this.state.image + ")" }}
                  onClick={this.populer}
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <div className="card-body p-0">
                    <img
                      className="model rounded"
                      src={this.state.image}
                      alt=""
                    />
                  </div>
                </div>
                <p className="f makanan m-2 pb-0">{this.state.name}</p>
                <p className="f name mx-2 mb-3">
                  <FontAwesomeIcon icon={faStar} /> &nbsp;
                  <span className="name">{this.state.rating}</span> &nbsp;
                  <span className="makanan ml-3">Rp. {this.state.harga}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="row p-2">
            <div className="col-6">
              <p className="f">Jumlah : {this.state.jumlah}</p>
            </div>
            <div className="col-6 text-center">
              <button className="btn btn-success float-right btn-block">
                {this.state.isLoading ? "Menyimpan ..." : "BUAT"} &nbsp;
                <i className="fas fa-plus-circle"></i>
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Modal;
