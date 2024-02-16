<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Displaying Quickcount Pilpres 2024</title>
    <style>
      @property --percent {
        syntax: "<number>";
        initial-value: 0;
        inherits: false;
      }
      @property --temp {
        syntax: "<number>";
        initial-value: 0;
        inherits: false;
      }
      @property --v1 {
        syntax: "<integer>";
        initial-value: 0;
        inherits: false;
      }
      @property --v2 {
        syntax: "<integer>";
        initial-value: 0;
        inherits: false;
      }

      .number-counter {
        transition: --percent 1s;
        --temp: calc(var(--percent) * 100);
        --v1: max(var(--temp) - 0.5, 0);
        --v2: max((var(--temp) - var(--v1)) * 100 - 0.5, 0);
        counter-reset: v1 var(--v1) v2 var(--v2);
      }
      .number-counter::before {
        content: counter(v1) "." counter(v2, decimal-leading-zero) "%";
      }
    </style>
  </head>
  <body class="bg-slate-900 text-white">
    <div class="text-white text-center my-4">IG: @zaininijar</div>
    <div class="flex flex-col items-center gap-8" id="quickcount-1"></div>
    <div class="flex flex-col items-center gap-8 mt-8" id="quickcount-2"></div>
    <div class="flex flex-col items-center gap-8 mt-8" id="quickcount-3"></div>
    <div class="flex flex-col items-center gap-8 mt-8" id="quickcount-4"></div>
    <div class="flex flex-col items-center gap-8 mt-8" id="quickcount-5"></div>
    <div class="flex flex-col items-center gap-8 mt-8" id="quickcount-6"></div>
    <script src="./js/get-quickcount.js" defer></script>
  </body>
</html>
