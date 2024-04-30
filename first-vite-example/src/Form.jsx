import React from 'react'

export default function Form() {
  return (
    <div className='form'>
      <form>

        <label for="">
          Pasientin tam adi: <br />
          <input type="text" placeholder="Adinizi daxil edin:" name="name" required />
        </label>

        <label for="">
          FIN: <br />
          <input type="text" placeholder="FIN daxil edin:" name="fin" required />
        </label>
        <select name="" id="">
          <option value="">Kisi</option>
          <option value="">Qadin</option>
        </select>

        <label for="">
          Yas: <br />
          <input type="number" placeholder="Yasinizi daxil edin:" name="age" />
        </label>

        <label for="">
          Mail: <br />
          <input type="email" placeholder="Emailiniz daxil edin: " name="mail" />
        </label>

        <label for="">
          Elaqe: <br />
          <input type="number" placeholder="Elaqe nomresi daxil edin:" name="number" />
        </label>

        <textarea name="" id="" cols="10" rows="10"></textarea>

        <label for="">
          Tekrar qebul: <input type="checkbox" class="cheackbox" name="check" />
        </label>

        <button type="submit">Gonder</button>
      </form>
    </div>
  )
}