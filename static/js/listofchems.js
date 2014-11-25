
  $(function() {
    var availableChems = [
      "Alumina Hydrate",
      "Alumina Oxide",
      "Antimony Oxide",
      "Barium Carbonate",
      "Barium Sulphate",
      "Bentonite 325 Mesh",
      "Bentonite Macaloid (Beneficiated Bentonite)",
      "Bentonite White (Bentolite L10)",
      "Bone Ash (dical. phos.)",
      "Borax Powder",
      "Burnt Umber",
      "Calcium Borate (Cadycal)",
      "Calcium Carbonate (Whiting)",
      "Cerium Oxide",
      "Chromium Oxide",
      "CLAY BALL Kentucky OM-4",
      "CLAY BALL Old Hickory M23",
      "CLAY BALL Tennessee SGP#1",
      "CLAY BALL XX Saggar",
      "CLAY FIRE Amador",
      "CLAY FIRE Gold Art",
      "CLAY FIRE GreenStripe",
      "CLAY FIRE IMC 400 or 800",
      "CLAY FIRE Lincoln 8 or 60",
      "CLAY FIRE Missouri-Hawthorn Bond",
      "CLAY Kaolin (China Clay) #6 Tile",
      "CLAY Kaolin (China Clay) Calcined Glomax (55#)",
      "CLAY Kaolin (China Clay) EPK",
      "CLAY Kaolin (China Clay) Grolleg English (55#)",
      "CLAY Kaolin (China Clay) Helmer",
      "CLAY Kaolin (China Clay) Ione",
      "CLAY Kaolin (China Clay) Opticast",
      "CLAY OTHER AlbertaSlipClay",
      "CLAY OTHER Barnard Blackbird Sub.",
      "CLAY OTHER PV Clay (Plastic Vitrox)",
      "CLAY OTHER Seattle Slip",
      "CLAY RED C-Red Clay (Carbondale Red)",
      "CLAY RED Laterite",
      "CLAY RED Newman Red",
      "CLAY RED Red Art",
      "Cobalt Carbonate",
      "Cobalt Oxide",
      "Cobalt Sulphate",
      "Copper Carbonate",
      "Copper Oxide Black",
      "Copper Oxide Red",
      "Copper Sulphate",
      "Cornwall Stone Sub",
      "Cryolite (Kryolite)",
      "Dolomite",
      "Feldspar Custer (Potash)",
      "Feldspar G-200 (Potash)",
      "Feldspar Minspar-200 (Soda/Kona F4)",
      "Ferro Frit 3110",
      "Ferro Frit 3124 O'Hommel 90",
      "Ferro Frit 3124 Pemco P311",
      "Ferro Frit 3124 Pemco P758",
      "Ferro Frit 3134 O'Hommel 14",
      "Ferro Frit 3134 Pemco J6",
      "Ferro Frit 3134 Pemco P54",
      "Ferro Frit 3195",
      "Ferro Frit 3278",
      "Ferro Frit 5301",
      "Fluorspar",
      "Gerstley Borate",
      "Gum Arabic",
      "Gum C.M.C.",
      "Gum Vee Gum-T",
      "Ilmenite Granular",
      "Iron Chromate",
      "Iron Oxide Black",
      "Iron Oxide Red",
      "Iron Spanish Red",
      "Iron Yellow",
      "Kyanite (200M)",
      "Lithium Carbonate",
      "Magnesium Carbonate",
      "Magnesium Sulphate (Epsom Salt)",
      "Magnetite Granular",
      "Manganese Carbonate",
      "Manganese Dioxide Granular 60-80M",
      "Manganese Dioxide Powdered",
      "Mica 325 Mesh",
      "Mullite (200M)",
      "Nepheline Syenite",
      "Nickel Carbonate",
      "Nickel Oxide Black",
      "Ochre, Yellow",
      "Petalite",
      "Pumice (Volcanic Ash)",
      "Pyrophyllite (Pyrax HS)",
      "Rutile Powder",
      "Silica (flint) 200 Mesh",
      "Silica (flint) 325 Mesh",
      "Silicon Carbide 400M",
      "Sodium Bicarbonate",
      "Sodium Carbonate (Soda Ash)",
      "Sodium Nitrate",
      "Spodumene",
      "Strontium Carbonate",
      "Talc Pioneer 2882 (C98)",
      "Tin Chloride (Stannous)",
      "Tin Oxide",
      "Titanium Dioxide",
      "Vanadium Pentox",
      "Volcanic Ash (Pumice)",
      "Whiting (Calcium Carbonate)",
      "Wollastonite",
      "Zinc",
      "Zircopax Plus (aka Superpax)"

    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  });