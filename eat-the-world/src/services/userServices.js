const urlBase = 'http://localhost:3004/favorites';

export function getFavorites() {
  return fetch(urlBase).then((res) => res.json());
}

export function deleteFavorites(id) {
  fetch(`${urlBase}/${id}`, {
    method: 'DELETE',
  });
}

export function addFavorites(input) {
  return fetch(urlBase, {
    method: 'POST',
    body: JSON.stringify(input),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());
}
