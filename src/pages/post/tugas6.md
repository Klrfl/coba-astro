---
layout: "../../layouts/LayoutTugas.astro"
slug: "tugas-6"
judul: "Tugas 6"
perintah: "Satukan file latihan1.html sampai latihan5.html menjadi latihan6.html dan tampilkan logo metlan school di pojok kiri atas halaman web"
deskripsi: "Tugas terakhir ini cuma salin tempel aja sih. Ga ada yang susah-susah amat. Di sini gua masukin beberapa elemen section karena awalnya gua pengen kasih CSS, tapi yah gua merasa terlalu banyak effort yang gua keluarkan. Gua pikir, ya lagian ga akan nambah nilai juga. Jadi, ga jadi. O iya, gua juga lupa nambahin gambar SMK Metland"
kode: '<main>
  <div class="tugas-container">
  <section class="tugas tugas--1">
  <h2 class="judul-tugas">Tugas 1</h2>
  <h1>Ini h1</h1>
  <h2>Ini h2</h2>
  <h3>Ini h3</h3>
  <h4>Ini h4</h4>
  <h5>Ini h5</h5>
  <h6>Ini h6</h6>
  </section>
  <section class="tugas tugas--2">
  <h2 class="judul-tugas">Tugas 2</h2>
  <a href="https://smkmetland.net/ppdb">Halaman web SMK Metland</a>
  </section>
  <section class="tugas tugas--3">
  <h2 class="judul-tugas">Tugas 3</h2>
  <ins>Ins</ins>
  <sup>Sup</sup>
  <sub>Sub</sub>
  <b>b</b>
  <em>em</em>
  <strong>strong</strong>
  <mark>mark</mark>
  </section>
  <section class="tugas tugas--4">
  <h2 class="judul-tugas">Tugas 4</h2>
  <table>
  <tr>
  <th>Id</th>
  <th>User</th>
  <th>Email</th>
  </tr>
  <tr>
  <td>1</td>
  <td>Michael</td>
  <td>michael@example.com</td>
  </tr>
  <tr>
  <td>2</td>
  <td>Devano</td>
  <td>dev@example.com</td>
  </tr>
  <tr>
  <td>3</td>
  <td>Abimanyu</td>
  <td>iclx8755@example.com</td>
  </tr>
  </table>
  </section>
  <section class="tugas tugas--5">
  <h2 class="judul-tugas">Tugas 5</h2>
  <ol>
  <li>Ini</li>
  <li>adalah</li>
  <li>sebuah</li>
  <li>ordered list</li>
  <li>(daftar terurut)</li>
  </ol>
  <ul>
  <li>Ini</li>
  <li>adalah</li>
  <li>sebuah</li>
  <li>unordered list</li>
  <li>(daftar tak terurut)</li>
  </ul>
  </section>
  </div>
  </main>'
---

```html
<main>
  <div class="tugas-container">
    <section class="tugas tugas--1">
      <h2 class="judul-tugas">Tugas 1</h2>
      <h1>Ini h1</h1>
      <h2>Ini h2</h2>
      <h3>Ini h3</h3>
      <h4>Ini h4</h4>
      <h5>Ini h5</h5>
      <h6>Ini h6</h6>
    </section>
    <section class="tugas tugas--2">
      <h2 class="judul-tugas">Tugas 2</h2>
      <a href="https://smkmetland.net/ppdb">Halaman web SMK Metland</a>
    </section>
    <section class="tugas tugas--3">
      <h2 class="judul-tugas">Tugas 3</h2>
      <ins>Ins</ins>
      <sup>Sup</sup>
      <sub>Sub</sub>
      <b>b</b>
      <em>em</em>
      <strong>strong</strong>
      <mark>mark</mark>
    </section>
    <section class="tugas tugas--4">
      <h2 class="judul-tugas">Tugas 4</h2>
      <table>
        <tr>
          <th>Id</th>
          <th>User</th>
          <th>Email</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Michael</td>
          <td>michael@example.com</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Devano</td>
          <td>dev@example.com</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Abimanyu</td>
          <td>iclx8755@example.com</td>
        </tr>
      </table>
    </section>
    <section class="tugas tugas--5">
      <h2 class="judul-tugas">Tugas 5</h2>
      <ol>
        <li>Ini</li>
        <li>adalah</li>
        <li>sebuah</li>
        <li>ordered list</li>
        <li>(daftar terurut)</li>
      </ol>
      <ul>
        <li>Ini</li>
        <li>adalah</li>
        <li>sebuah</li>
        <li>unordered list</li>
        <li>(daftar tak terurut)</li>
      </ul>
    </section>
  </div>
</main>
```
