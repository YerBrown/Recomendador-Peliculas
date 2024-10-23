import {
  GENEROS,
  WHATCH_PROVIDERS,
  getLocalStoragePreferences,
  updatePreferences,
  checkPreferencesValues,
} from "./movie-list.js";
import { openMainPage } from "./codigo.js";
class PreferencesForm {
  constructor(parentId, preferences = null) {
    this.parentId = parentId;
    this.parent = document.getElementById(parentId);
    this.crearModal();
    if (preferences != null) {
      this.añadirPreferencias(preferences);
    }
  }
  crearModal() {
    this.modalParent = document.createElement("div");
    this.modalParent.id = "form-modal";

    this.crearFormulario();

    this.parent.appendChild(this.modalParent);
  }
  crearFormulario() {
    this.parentFormulario = document.createElement("form");
    this.parentFormulario.id = "form-preferences";

    // 1 Question
    this.yearQuestion = document.createElement("fieldset");
    this.yearQuestion.id = "year-limit";

    const yearLegend = document.createElement("legend");
    yearLegend.innerText = "¿Quieres limitar el año de estreno?";
    // 1980
    const option1 = document.createElement("div");
    option1.classList.add("radio-option");
    const yearLabel1 = document.createElement("label");
    yearLabel1.setAttribute("for", "1980-year");
    yearLabel1.innerText = "Desde el año 1980";
    this.yearInput1 = document.createElement("input");
    this.yearInput1.setAttribute("type", "radio");
    this.yearInput1.setAttribute("name", "year");
    this.yearInput1.setAttribute("id", "1980-year");
    this.yearInput1.setAttribute("value", "1980");
    option1.append(yearLabel1, this.yearInput1);
    // 1990
    const option2 = document.createElement("div");
    option2.classList.add("radio-option");
    const yearLabel2 = document.createElement("label");
    yearLabel2.setAttribute("for", "1990-year");
    yearLabel2.innerText = "Desde el año 1990";
    this.yearInput2 = document.createElement("input");
    this.yearInput2.setAttribute("type", "radio");
    this.yearInput2.setAttribute("name", "year");
    this.yearInput2.setAttribute("id", "1990-year");
    this.yearInput2.setAttribute("value", "1990");
    option2.append(yearLabel2, this.yearInput2);
    // 2000
    const option3 = document.createElement("div");
    option3.classList.add("radio-option");
    const yearLabel3 = document.createElement("label");
    yearLabel3.setAttribute("for", "2000-year");
    yearLabel3.innerText = "Desde el año 2000";
    this.yearInput3 = document.createElement("input");
    this.yearInput3.setAttribute("type", "radio");
    this.yearInput3.setAttribute("name", "year");
    this.yearInput3.setAttribute("id", "2000-year");
    this.yearInput3.setAttribute("value", "2000");
    option3.append(yearLabel3, this.yearInput3);
    // 2010
    const option4 = document.createElement("div");
    option4.classList.add("radio-option");
    const yearLabel4 = document.createElement("label");
    yearLabel4.setAttribute("for", "2010-year");
    yearLabel4.innerText = "Desde el año 2010";
    this.yearInput4 = document.createElement("input");
    this.yearInput4.setAttribute("type", "radio");
    this.yearInput4.setAttribute("name", "year");
    this.yearInput4.setAttribute("id", "2010-year");
    this.yearInput4.setAttribute("value", "2010");
    option4.append(yearLabel4, this.yearInput4);
    // No filter
    const option5 = document.createElement("div");
    option5.classList.add("radio-option");
    const yearLabel5 = document.createElement("label");
    yearLabel5.setAttribute("for", "empty-year");
    yearLabel5.innerText = "No me importa";
    this.yearInput5 = document.createElement("input");
    this.yearInput5.setAttribute("type", "radio");
    this.yearInput5.setAttribute("name", "year");
    this.yearInput5.setAttribute("id", "empty-year");
    this.yearInput5.setAttribute("value", "");
    option5.append(yearLabel5, this.yearInput5);

    this.yearQuestion.append(
      yearLegend,
      option1,
      option2,
      option3,
      option4,
      option5
    );

    // 2 Question
    this.genresQuestion = document.createElement("fieldset");
    this.genresQuestion.id = "genres-limit";

    const genresLegend = document.createElement("legend");
    genresLegend.innerText = "¿Que generos te interesan?";

    const genreOptions = this.crearGeneroOpciones();

    this.genresQuestion.appendChild(genresLegend);
    if (genreOptions != null && genreOptions.length > 0) {
      for (const genre of genreOptions) {
        this.genresQuestion.appendChild(genre);
      }
    }

    // 3 Question
    this.runtimeQuestion = document.createElement("fieldset");
    this.runtimeQuestion.id = "runtime-limit";

    const runtimeLegend = document.createElement("legend");
    runtimeLegend.innerText = "¿Cuanto quieres que dure?";

    // Menos de 1h
    const option1h = document.createElement("div");
    option1h.classList.add("radio-option");
    const runtimeLabel1 = document.createElement("label");
    runtimeLabel1.setAttribute("for", "1h");
    runtimeLabel1.innerText = "Menos de 1h";
    this.runtimeInput1 = document.createElement("input");
    this.runtimeInput1.setAttribute("type", "radio");
    this.runtimeInput1.setAttribute("name", "runtime");
    this.runtimeInput1.setAttribute("id", "1h");
    this.runtimeInput1.setAttribute("value", "60");
    option1h.append(runtimeLabel1, this.runtimeInput1);
    // Menos de 1h 30m
    const option1h30m = document.createElement("div");
    option1h30m.classList.add("radio-option");
    const runtimeLabel2 = document.createElement("label");
    runtimeLabel2.setAttribute("for", "1h30m");
    runtimeLabel2.innerText = "Menos de 1h 30m";
    this.runtimeInput2 = document.createElement("input");
    this.runtimeInput2.setAttribute("type", "radio");
    this.runtimeInput2.setAttribute("name", "runtime");
    this.runtimeInput2.setAttribute("id", "1h30m");
    this.runtimeInput2.setAttribute("value", "90");
    option1h30m.append(runtimeLabel2, this.runtimeInput2);
    // Menos de 2h
    const option2h = document.createElement("div");
    option2h.classList.add("radio-option");
    const runtimeLabel3 = document.createElement("label");
    runtimeLabel3.setAttribute("for", "2h");
    runtimeLabel3.innerText = "Menos de 2h";
    this.runtimeInput3 = document.createElement("input");
    this.runtimeInput3.setAttribute("type", "radio");
    this.runtimeInput3.setAttribute("name", "runtime");
    this.runtimeInput3.setAttribute("id", "2h");
    this.runtimeInput3.setAttribute("value", "120");
    option2h.append(runtimeLabel3, this.runtimeInput3);
    // No filter
    const option0h = document.createElement("div");
    option0h.classList.add("radio-option");
    const runtimeLabel4 = document.createElement("label");
    runtimeLabel4.setAttribute("for", "empty-runtime");
    runtimeLabel4.innerText = "No me importa";
    this.runtimeInput4 = document.createElement("input");
    this.runtimeInput4.setAttribute("type", "radio");
    this.runtimeInput4.setAttribute("name", "runtime");
    this.runtimeInput4.setAttribute("id", "empty-runtime");
    this.runtimeInput4.setAttribute("value", "");
    option0h.append(runtimeLabel4, this.runtimeInput4);

    this.runtimeQuestion.append(
      runtimeLegend,
      option1h,
      option1h30m,
      option2h,
      option0h
    );
    // 4 Question
    this.providersQuestion = document.createElement("fieldset");
    this.providersQuestion.id = "providers-limit";

    const providersLegend = document.createElement("legend");
    providersLegend.innerText =
      "¿Quieres que filtremos por plataforma de video?";

    const providerOptions = this.crearWatchProvidersOpciones();

    this.providersQuestion.appendChild(providersLegend);
    if (providerOptions != null && providerOptions.length > 0) {
      for (const provider of providerOptions) {
        this.providersQuestion.appendChild(provider);
      }
    }

    // Añadir todas las preguntas
    this.parentFormulario.append(
      this.yearQuestion,
      this.genresQuestion,
      this.runtimeQuestion,
      this.providersQuestion
    );
    // Añadir submit button
    this.submitButton = document.createElement("button");
    this.submitButton.setAttribute("type", "submit");
    this.submitButton.innerText = "Recomendame";

    this.submitButton.addEventListener("click", function (event) {
      event.preventDefault();

      const submitValues = {};
      // Guardar la informacion seleccionada por el usuario
      const selectedYearLimit = document.querySelector(
        'input[name="year"]:checked'
      );
      const selectedGenres = document.querySelectorAll(
        'input[name="genre"]:checked'
      );
      const selectedRuntimeLimit = document.querySelector(
        'input[name="runtime"]:checked'
      );
      const selectedProviders = document.querySelectorAll(
        'input[name="provider"]:checked'
      );
      // Asignar los valores al filtro
      // Comprobar que los elementos requeridos estan completados
      try {
        if (selectedYearLimit == null || selectedYearLimit.value == null) {
          throw new Error("Error: selected year is null");
        }
        if (
          selectedRuntimeLimit == null ||
          selectedRuntimeLimit.value == null
        ) {
          throw new Error("Error: runtime is null");
        }
        submitValues["primary_release_date.gte"] = selectedYearLimit.value;
        submitValues["with_runtime.lte"] = selectedRuntimeLimit.value;
      } catch (error) {
        console.error(error.message);
      }
      // Añadir los filtros multiples de generos y proveedores de video
      const genreValues = [];
      if (selectedGenres != null && selectedGenres.length > 0) {
        for (const genre of selectedGenres) {
          genreValues.push(genre.value);
        }
      }
      if (genreValues.length > 0) {
        submitValues["with_genres"] = genreValues.join("||");
      }

      const providerValues = [];
      if (selectedProviders != null && selectedProviders.length > 0) {
        for (const provider of selectedProviders) {
          providerValues.push(provider.value);
        }
      }
      if (providerValues.length > 0) {
        submitValues["with_watch_providers"] = providerValues.join("||");
      }
      console.log(submitValues);
      
      if (checkPreferencesValues(getLocalStoragePreferences(), submitValues)) {
        // Abrimos la pzantalla principal
        openMainPage();
      } else {
        // Actualizamos las preferencias
        updatePreferences(submitValues);
        openMainPage(true);
      }
      const formParent = document.getElementById("form-modal");
      formParent.remove();
    });

    this.parentFormulario.appendChild(this.submitButton);

    // Añadir todo al modal
    this.modalParent.appendChild(this.parentFormulario);
  }
  crearGeneroOpciones() {
    const genreOptions = [];
    for (const genre of GENEROS) {
      const genreOption = document.createElement("div");
      genreOption.classList.add("checkbox-option");

      const genreLabel = document.createElement("label");
      genreLabel.setAttribute("for", genre.name);
      genreLabel.innerText = genre.name;

      const genreInput = document.createElement("input");
      genreInput.setAttribute("type", "checkbox");
      genreInput.setAttribute("name", "genre");
      genreInput.setAttribute("id", genre.name);
      genreInput.setAttribute("value", genre.id);

      genreOption.append(genreLabel, genreInput);

      genreOptions.push(genreOption);
    }
    return genreOptions;
  }
  crearWatchProvidersOpciones() {
    const providersOptions = [];
    for (const provider of WHATCH_PROVIDERS) {
      const providerOption = document.createElement("div");
      providerOption.classList.add("checkbox-option");

      const providerLabel = document.createElement("label");
      providerLabel.setAttribute("for", provider.provider_name);
      providerLabel.innerText = provider.provider_name;

      const providerInput = document.createElement("input");
      providerInput.setAttribute("type", "checkbox");
      providerInput.setAttribute("name", "provider");
      providerInput.setAttribute("id", provider.provider_name);
      providerInput.setAttribute("value", provider.provider_id);

      providerOption.append(providerLabel, providerInput);

      providersOptions.push(providerOption);
    }
    return providersOptions;
  }
  añadirPreferencias(preferences) {
    if (preferences["primary_release_date.gte"] != null) {
      const selectedYearLimit = document.querySelector(
        `input[value="${preferences["primary_release_date.gte"]}"]`
      );
      if (selectedYearLimit != null) {
        selectedYearLimit.checked = true;
      }
    }
    if (preferences["with_runtime.lte"] != null) {
      const selectedRuntimeLimit = document.querySelector(
        `input[value="${preferences["with_runtime.lte"]}"]`
      );
      if (selectedRuntimeLimit != null) {
        selectedRuntimeLimit.checked = true;
      }
    }
    if (preferences["with_genres"] != null) {
      const allGenres = preferences["with_genres"].split("||");
      if (allGenres.length > 0) {
        for (const genre of allGenres) {
          const selectedGenreLimit = document.querySelector(
            `input[value="${genre}"]`
          );
          if (selectedGenreLimit != null) {
            selectedGenreLimit.checked = true;
          }
        }
      }
    }
    if (preferences["with_watch_providers"] != null) {
      const allproviders = preferences["with_watch_providers"].split("||");
      if (allproviders.length > 0) {
        for (const provider of allproviders) {
          const selectedProviderLimit = document.querySelector(
            `input[value="${provider}"]`
          );
          if (selectedProviderLimit != null) {
            selectedProviderLimit.checked = true;
          }
        }
      }
    }
  }
}
export default PreferencesForm;
