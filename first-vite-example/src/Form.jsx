import React, { useState } from 'react';

const Form= () => {
  const [formData, setFormData] = useState({
    name: '',
    fin: '',
    gender: '',
    age: '',
    email: '',
    number: '',
    notes: '',
    repeat: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pasientin tam adi: <br />
        <input
          type="text"
          placeholder="Adinizi daxil edin:"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        FIN: <br />
        <input
          type="text"
          placeholder="FIN daxil edin:"
          name="fin"
          value={formData.fin}
          onChange={handleChange}
          required
        />
      </label>

      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
      >
        <option value="Kisi">Kisi</option>
        <option value="Qadin">Qadin</option>
      </select>

      <label>
        Yas: <br />
        <input
          type="number"
          placeholder="Yasinizi daxil edin:"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </label>

      <label>
        Mail: <br />
        <input
          type="email"
          placeholder="Emailiniz daxil edin: "
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>

      <label>
        Elaqe: <br />
        <input
          type="number"
          placeholder="Elaqe nomresi daxil edin:"
          name="number"
          value={formData.number}
          onChange={handleChange}
        />
      </label>

      <textarea
        name="notes"
        value={formData.notes}
        onChange={handleChange}
        cols="10"
        rows="10"
      ></textarea>

      <label>
        Tekrar qebul:{' '}
        <input
          type="checkbox"
          className="checkbox"
          name="repeat"
          checked={formData.repeat}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Gonder</button>
    </form>
  );
};

export default Form;
