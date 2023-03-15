export const markup = `
    <div class="card">
        <div class="image-card-top">
            <img src="{sprites.front_default}" alt="{name}">
        </div>
        <div class="card-body">
            <h2 class="card-title">Имя:{name}</h2>
            <p class="card-text">Вес:{weight}</p>
            <p class="card-text">Рост:{height}</p>

            <p class="card-text"><b>Умения</b></p>
            {#each abilities}
            <ul class="list-group">
                <li class="list-group-item">{ability.name}</li>
            </ul>
            {{/each}}
        </div>
    </div>`;