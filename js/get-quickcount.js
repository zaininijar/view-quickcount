const quickcount1Container = document.getElementById("quickcount-1");

const getQuickcount1 = () => {
    document.querySelectorAll("#inthasil1").forEach((e) => e.style.setProperty("--percent", 0))

    fetch('https://www.cnnindonesia.com/api/v2/external/pemilu2024?path=pilpres/2024/qc/summary/18')
    .then(response => response.json())
    .then(data => {
        displayQuickcount1(data.data);
        setTimeout(() => {
            document.querySelectorAll("#inthasil1").forEach((e, key) => e.style.setProperty("--percent", data.data.perolehan[key].inthasil/100))
        }, 100)
    })
    .catch(error => {
        console.error('Error:', error);
        quickcount1Container.innerText = 'Gagal memuat data';
    });
}

const getHumanTime = (isoDateString) => {
    const dateObj = new Date(isoDateString);

    const tanggal = dateObj.getDate();
    const bulan = dateObj.getMonth() + 1;
    const tahun = dateObj.getFullYear();

    const jam = dateObj.getHours();
    const menit = dateObj.getMinutes();
    const detik = dateObj.getSeconds();

    const waktuManusia = `${tanggal}/${bulan}/${tahun} ${jam}:${menit}:${detik}`;

    return waktuManusia;
}

const animationCounter = (number) => {
    const genNumber = () => {
        document
          .querySelector(".number-counter")
          .style.setProperty("--percent", number);
      };
    
      setTimeout(genNumber);
}

const displayQuickcount1 = (data) => {
    
    const html = `
    <div class="container flex flex-col gap-4 px-4 py-8 border rounded">
        <div class="h-[40px] mx-auto overflow-hidden position-relative rounded">
            <img
            height="100"
            class="object-cover object-center w-full h-full"
            src="${data.lembaga_path}"
            alt=""
            />
        </div>
        <div>
            <p class="text-lg">Data Masuk: ${data.intdatamasuk}%</p>
            <p class="text-xs text-gray-500">Last Update: ${getHumanTime(data.dtlastupdate)}</p>
        </div>
        <div class="bg-indigo-500 rounded p-4 flex items-center gap-4">
            <div
            class="w-[80px] h-[80px] overflow-hidden position-relative rounded-full"
            >
            <img
                class="object-cover object-center w-full h-full"
                src="./img/1.png"
                alt=""
            />
            </div>
            <div class="text-4xl font-bold number-counter" id="inthasil1"></div>
        </div>
        <div class="bg-indigo-500 rounded p-4 flex items-center gap-4">
            <div
            class="w-[80px] h-[80px] overflow-hidden position-relative rounded-full"
            >
            <img
                class="object-cover object-center w-full h-full"
                src="./img/2.png"
                alt=""
            />
            </div>
            <div class="text-4xl font-bold number-counter" id="inthasil1"></div>
        </div>
        <div class="bg-indigo-500 rounded p-4 flex items-center gap-4">
            <div
            class="w-[80px] h-[80px] overflow-hidden position-relative rounded-full"
            >
            <img
                class="object-cover object-center w-full h-full"
                src="./img/3.png"
                alt=""
            />
            </div>
            <div class="text-4xl font-bold number-counter" id="inthasil1"></div>
        </div>
    </div>
    `;
    quickcount1Container.innerHTML = html;
}

getQuickcount1();

// getQuickcount2

const quickcount2Container = document.getElementById("quickcount-2");

const getQuickcount2 = () => {
    document.querySelectorAll("#inthasil2").forEach((e) => e.style.setProperty("--percent", 0))
    fetch('https://www.cnnindonesia.com/api/v2/external/pemilu2024?path=pilpres/2024/qc/summary/28')
    .then(response => response.json())
    .then(data => {
        displayQuickcount2(data.data);
        setTimeout(() => {
            document.querySelectorAll("#inthasil2").forEach((e, key) => e.style.setProperty("--percent", data.data.perolehan[key].inthasil/100))
        }, 100)
    })
    .catch(error => {
        console.error('Error:', error);
        quickcount2Container.innerText = 'Gagal memuat data';
    });
}

const displayQuickcount2 = (data) => {

    const html = `
    <div class="container flex flex-col gap-4 px-4 py-8 border rounded">
        <div class="h-[40px] mx-auto bg-white overflow-hidden position-relative rounded">
            <img
            height="100"
            class="object-cover object-center w-full h-full"
            src="${data.lembaga_path}"
            alt=""
            />
        </div>
        <div>
            <p class="text-lg">Data Masuk: ${data.intdatamasuk}%</p>
            <p class="text-xs text-gray-500">Last Update: ${getHumanTime(data.dtlastupdate)}</p>
        </div>
        <div class="bg-indigo-500 rounded p-4 flex items-center gap-4">
            <div
            class="w-[80px] h-[80px] overflow-hidden position-relative rounded-full"
            >
            <img
                class="object-cover object-center w-full h-full"
                src="./img/1.png"
                alt=""
            />
            </div>
            <div class="text-4xl font-bold number-counter" id="inthasil2"></div>
        </div>
        <div class="bg-indigo-500 rounded p-4 flex items-center gap-4">
            <div
            class="w-[80px] h-[80px] overflow-hidden position-relative rounded-full"
            >
            <img
                class="object-cover object-center w-full h-full"
                src="./img/2.png"
                alt=""
            />
            </div>
            <div class="text-4xl font-bold number-counter" id="inthasil2"></div>
        </div>
        <div class="bg-indigo-500 rounded p-4 flex items-center gap-4">
            <div
            class="w-[80px] h-[80px] overflow-hidden position-relative rounded-full"
            >
            <img
                class="object-cover object-center w-full h-full"
                src="./img/3.png"
                alt=""
            />
            </div>
            <div class="text-4xl font-bold number-counter" id="inthasil2"></div>
        </div>
    </div>
    `;
    quickcount2Container.innerHTML = html;
}

getQuickcount2();

// getQuickcount3

const quickcount3Container = document.getElementById("quickcount-3");

const getQuickcount3 = () => {
    document.querySelectorAll("#inthasil3").forEach((e) => e.style.setProperty("--percent", 0))
    fetch('https://www.cnnindonesia.com/api/v2/external/pemilu2024?path=pilpres/2024/qc/summary/26')
    .then(response => response.json())
    .then(data => {
        displayQuickcount3(data.data);
        setTimeout(() => {
            document.querySelectorAll("#inthasil3").forEach((e, key) => e.style.setProperty("--percent", data.data.perolehan[key].inthasil/100))
        }, 100)
    })
    .catch(error => {
        console.error('Error:', error);
        quickcount3Container.innerText = 'Gagal memuat data';
    });
}

const displayQuickcount3 = (data) => {

    const html = `
    <div class="container flex flex-col gap-4 px-4 py-8 border rounded">
        <div class="h-[40px] mx-auto bg-white overflow-hidden position-relative rounded">
            <img
            height="100"
            class="object-cover object-center w-full h-full"
            src="${data.lembaga_path}"
            alt=""
            />
        </div>
        <div>
            <p class="text-lg">Data Masuk: ${data.intdatamasuk}%</p>
            <p class="text-xs text-gray-500">Last Update: ${getHumanTime(data.dtlastupdate)}</p>
        </div>
        <div class="bg-indigo-500 rounded p-4 flex items-center gap-4">
            <div
            class="w-[80px] h-[80px] overflow-hidden position-relative rounded-full"
            >
            <img
                class="object-cover object-center w-full h-full"
                src="./img/1.png"
                alt=""
            />
            </div>
            <div class="text-4xl font-bold number-counter" id="inthasil3"></div>
        </div>
        <div class="bg-indigo-500 rounded p-4 flex items-center gap-4">
            <div
            class="w-[80px] h-[80px] overflow-hidden position-relative rounded-full"
            >
            <img
                class="object-cover object-center w-full h-full"
                src="./img/2.png"
                alt=""
            />
            </div>
            <div class="text-4xl font-bold number-counter" id="inthasil3"></div>
        </div>
        <div class="bg-indigo-500 rounded p-4 flex items-center gap-4">
            <div
            class="w-[80px] h-[80px] overflow-hidden position-relative rounded-full"
            >
            <img
                class="object-cover object-center w-full h-full"
                src="./img/3.png"
                alt=""
            />
            </div>
            <div class="text-4xl font-bold number-counter" id="inthasil3"></div>
        </div>
    </div>
    `;
    quickcount3Container.innerHTML = html;
}

getQuickcount3();


// getQuickcount4

const quickcount4Container = document.getElementById("quickcount-4");

const getQuickcount4 = () => {
    document.querySelectorAll("#inthasil4").forEach((e) => e.style.setProperty("--percent", 0))
    fetch('https://www.cnnindonesia.com/api/v2/external/pemilu2024?path=pilpres/2024/qc/summary/24')
    .then(response => response.json())
    .then(data => {
        displayQuickcount4(data.data);
        setTimeout(() => {
            document.querySelectorAll("#inthasil4").forEach((e, key) => e.style.setProperty("--percent", data.data.perolehan[key].inthasil/100))
        }, 100)
    })
    .catch(error => {
        console.error('Error:', error);
        quickcount4Container.innerText = 'Gagal memuat data';
    });
}

const displayQuickcount4 = (data) => {

    const html = `
    <div class="container flex flex-col gap-4 px-4 py-8 border rounded">
        <div class="h-[40px] mx-auto bg-white overflow-hidden position-relative rounded">
            <img
            height="100"
            class="object-cover object-center w-full h-full"
            src="${data.lembaga_path}"
            alt=""
            />
        </div>
        <div>
            <p class="text-lg">Data Masuk: ${data.intdatamasuk}%</p>
            <p class="text-xs text-gray-500">Last Update: ${getHumanTime(data.dtlastupdate)}</p>
        </div>
        <div class="bg-indigo-500 rounded p-4 flex items-center gap-4">
            <div
            class="w-[80px] h-[80px] overflow-hidden position-relative rounded-full"
            >
            <img
                class="object-cover object-center w-full h-full"
                src="./img/1.png"
                alt=""
            />
            </div>
            <div class="text-4xl font-bold number-counter" id="inthasil4"></div>
        </div>
        <div class="bg-indigo-500 rounded p-4 flex items-center gap-4">
            <div
            class="w-[80px] h-[80px] overflow-hidden position-relative rounded-full"
            >
            <img
                class="object-cover object-center w-full h-full"
                src="./img/2.png"
                alt=""
            />
            </div>
            <div class="text-4xl font-bold number-counter" id="inthasil4"></div>
        </div>
        <div class="bg-indigo-500 rounded p-4 flex items-center gap-4">
            <div
            class="w-[80px] h-[80px] overflow-hidden position-relative rounded-full"
            >
            <img
                class="object-cover object-center w-full h-full"
                src="./img/3.png"
                alt=""
            />
            </div>
            <div class="text-4xl font-bold number-counter" id="inthasil4"></div>
        </div>
    </div>
    `;
    quickcount4Container.innerHTML = html;
}

getQuickcount4();


// getQuickcount5

const quickcount5Container = document.getElementById("quickcount-5");

const getQuickcount5 = () => {
    document.querySelectorAll("#inthasil5").forEach((e) => e.style.setProperty("--percent", 0))
    fetch('https://www.cnnindonesia.com/api/v2/external/pemilu2024?path=pilpres/2024/qc/summary/30')
    .then(response => response.json())
    .then(data => {
        displayQuickcount5(data.data);
        setTimeout(() => {
            document.querySelectorAll("#inthasil5").forEach((e, key) => e.style.setProperty("--percent", data.data.perolehan[key].inthasil/100))
        }, 100)
    })
    .catch(error => {
        console.error('Error:', error);
        quickcount5Container.innerText = 'Gagal memuat data';
    });
}

const displayQuickcount5 = (data) => {

    const html = `
    <div class="container flex flex-col gap-4 px-4 py-8 border rounded">
        <div class="mx-auto text-slate-900 px-8 py-2 font-bold text-xl bg-white rounded">
            ${data.nama_lembaga}
        </div>
        <div>
            <p class="text-lg">Data Masuk: ${data.intdatamasuk}%</p>
            <p class="text-xs text-gray-500">Last Update: ${getHumanTime(data.dtlastupdate)}</p>
        </div>
        <div class="bg-indigo-500 rounded p-4 flex items-center gap-4">
            <div
            class="w-[80px] h-[80px] overflow-hidden position-relative rounded-full"
            >
            <img
                class="object-cover object-center w-full h-full"
                src="./img/1.png"
                alt=""
            />
            </div>
            <div class="text-4xl font-bold number-counter" id="inthasil5"></div>
        </div>
        <div class="bg-indigo-500 rounded p-4 flex items-center gap-4">
            <div
            class="w-[80px] h-[80px] overflow-hidden position-relative rounded-full"
            >
            <img
                class="object-cover object-center w-full h-full"
                src="./img/2.png"
                alt=""
            />
            </div>
            <div class="text-4xl font-bold number-counter" id="inthasil5"></div>
        </div>
        <div class="bg-indigo-500 rounded p-4 flex items-center gap-4">
            <div
            class="w-[80px] h-[80px] overflow-hidden position-relative rounded-full"
            >
            <img
                class="object-cover object-center w-full h-full"
                src="./img/3.png"
                alt=""
            />
            </div>
            <div class="text-4xl font-bold number-counter" id="inthasil5"></div>
        </div>
    </div>
    `;
    quickcount5Container.innerHTML = html;
}

getQuickcount5();


// getQuickcount6

const quickcount6Container = document.getElementById("quickcount-6");

const getQuickcount6 = () => {
    document.querySelectorAll("#inthasil6").forEach((e) => e.style.setProperty("--percent", 0))
    fetch('https://www.cnnindonesia.com/api/v2/external/pemilu2024?path=pilpres/2024/qc/summary/32')
    .then(response => response.json())
    .then(data => {
        displayQuickcount6(data.data);
        setTimeout(() => {
            document.querySelectorAll("#inthasil6").forEach((e, key) => e.style.setProperty("--percent", data.data.perolehan[key].inthasil/100))
        }, 100)
    })
    .catch(error => {
        console.error('Error:', error);
        quickcount6Container.innerText = 'Gagal memuat data';
    });
}

const displayQuickcount6 = (data) => {

    const html = `
    <div class="container flex flex-col gap-4 px-4 py-8 border rounded">
        <div class="mx-auto text-slate-900 px-8 py-2 font-bold text-xl bg-white rounded">
            ${data.nama_lembaga}
        </div>
        <div>
            <p class="text-lg">Data Masuk: ${data.intdatamasuk}%</p>
            <p class="text-xs text-gray-500">Last Update: ${getHumanTime(data.dtlastupdate)}</p>
        </div>
        <div class="bg-indigo-500 rounded p-4 flex items-center gap-4">
            <div
            class="w-[80px] h-[80px] overflow-hidden position-relative rounded-full"
            >
            <img
                class="object-cover object-center w-full h-full"
                src="./img/1.png"
                alt=""
            />
            </div>
            <div class="text-4xl font-bold number-counter" id="inthasil6"></div>
        </div>
        <div class="bg-indigo-500 rounded p-4 flex items-center gap-4">
            <div
            class="w-[80px] h-[80px] overflow-hidden position-relative rounded-full"
            >
            <img
                class="object-cover object-center w-full h-full"
                src="./img/2.png"
                alt=""
            />
            </div>
            <div class="text-4xl font-bold number-counter" id="inthasil6"></div>
        </div>
        <div class="bg-indigo-500 rounded p-4 flex items-center gap-4">
            <div
            class="w-[80px] h-[80px] overflow-hidden position-relative rounded-full"
            >
            <img
                class="object-cover object-center w-full h-full"
                src="./img/3.png"
                alt=""
            />
            </div>
            <div class="text-4xl font-bold number-counter" id="inthasil6"></div>
        </div>
    </div>
    `;
    quickcount6Container.innerHTML = html;
}

getQuickcount6();

setInterval(() => {
    getQuickcount1();
    getQuickcount2();
    getQuickcount3();
    getQuickcount4();
    getQuickcount5();
    getQuickcount6();
}, 10000)
