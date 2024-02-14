const quickcount1Container = document.getElementById("quickcount-1");

const getQuickcount1 = () => {
    fetch('https://www.cnnindonesia.com/api/v2/external/pemilu2024?path=pilpres/2024/qc/summary/18')
    .then(response => response.json())
    .then(data => {
        displayQuickcount1(data.data);
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
            <div class="text-4xl font-bold">${data.perolehan[0].inthasil}%</div>
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
            <div class="text-4xl font-bold">${data.perolehan[1].inthasil}%</div>
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
            <div class="text-4xl font-bold">${data.perolehan[2].inthasil}%</div>
        </div>
    </div>
    `;
    quickcount1Container.innerHTML = html;
}

getQuickcount1();

// getQuickcount2

const quickcount2Container = document.getElementById("quickcount-2");

const getQuickcount2 = () => {
    fetch('https://www.cnnindonesia.com/api/v2/external/pemilu2024?path=pilpres/2024/qc/summary/28')
    .then(response => response.json())
    .then(data => {
        displayQuickcount2(data.data);
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
            <div class="text-4xl font-bold">${data.perolehan[0].inthasil}%</div>
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
            <div class="text-4xl font-bold">${data.perolehan[1].inthasil}%</div>
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
            <div class="text-4xl font-bold">${data.perolehan[2].inthasil}%</div>
        </div>
    </div>
    `;
    quickcount2Container.innerHTML = html;
}

getQuickcount2();

// getQuickcount3

const quickcount3Container = document.getElementById("quickcount-3");

const getQuickcount3 = () => {
    fetch('https://www.cnnindonesia.com/api/v2/external/pemilu2024?path=pilpres/2024/qc/summary/26')
    .then(response => response.json())
    .then(data => {
        displayQuickcount3(data.data);
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
            <div class="text-4xl font-bold">${data.perolehan[0].inthasil}%</div>
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
            <div class="text-4xl font-bold">${data.perolehan[1].inthasil}%</div>
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
            <div class="text-4xl font-bold">${data.perolehan[2].inthasil}%</div>
        </div>
    </div>
    `;
    quickcount3Container.innerHTML = html;
}

getQuickcount3();


// getQuickcount4

const quickcount4Container = document.getElementById("quickcount-4");

const getQuickcount4 = () => {
    fetch('https://www.cnnindonesia.com/api/v2/external/pemilu2024?path=pilpres/2024/qc/summary/24')
    .then(response => response.json())
    .then(data => {
        displayQuickcount4(data.data);
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
            <div class="text-4xl font-bold">${data.perolehan[0].inthasil}%</div>
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
            <div class="text-4xl font-bold">${data.perolehan[1].inthasil}%</div>
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
            <div class="text-4xl font-bold">${data.perolehan[2].inthasil}%</div>
        </div>
    </div>
    `;
    quickcount4Container.innerHTML = html;
}

getQuickcount4();

setInterval(() => {
    getQuickcount1();
    getQuickcount2();
    getQuickcount3();
    getQuickcount4();
}, 10000)