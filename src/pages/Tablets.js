import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';
import tarjeta from '../fondo.svg';
import '../App.css';

const Tablets = () => {
  console.log(2222);
  const getData = (e) => {

    e.preventDefault()

    axios({
      // url: 'http://192.168.1.29:3051/fidelizacion/user',
      url: 'https://fidelizacion-colgate-pass.col1.co/api/fidelizacion/user',
      method: 'get',
      params: {
        id: e.target.cedula.value
      }
    })
      .then(({ status, data }) => {

        const { msg1, msg2 } = data;

        if (status === 200) {
          Swal.fire({
            title: '¡Felicitaciones!',
            html:
              `${msg1 ? `<b style="color: red">${msg1}</b><br>` : ''}
              ${msg2}`,
            icon: 'success',
            confirmButtonText: 'Ok'
          })
        } else {
          Swal.fire({
            title: '',
            text: msg2,
            icon: 'info',
            confirmButtonText: 'Ok'
          })
        }
        document.getElementById("cedula").value = "";
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {

      })
  }

  return (
    <div className="App">
      <form onSubmit={getData}>
        <input className='input' type="number" name='cedula' id='cedula' />
        <button type='submit'>Buscar</button>
      </form>
      <img src={tarjeta} alt="" className='img-tarjeta' />
    </div>
  );
};

export default Tablets;