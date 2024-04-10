from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
import requests
import creds

app = Flask(__name__)
cors = CORS(app)


def fetch_genre_name(genre_ids):
    # Mapping of genre IDs to genre names
    genre_mapping = {
        28: "Action",
        12: "Adventure",
        16: "Animation",
        35: "Comedy",
        80: "Crime",
        99: "Documentary",
        18: "Drama",
        10751: "Family",
        14: "Fantasy",
        36: "History",
        27: "Horror",
        10402: "Music",
        9648: "Mystery",
        10749: "Romance",
        878: "Science Fiction",
        10770: "TV Movie",
        53: "Thriller",
        10752: "War",
        37: "Western"
    }
    # Get first genre ID
    first_genre_id = genre_ids[0] if genre_ids else None
    # Map first genre ID to its name
    return genre_mapping.get(first_genre_id)


@app.route('/popular_movies', methods=['GET'])
@cross_origin()
def get_popular_movies():
    url = "https://api.themoviedb.org/3/discover/movie"
    
    params = {
        "api_key": creds.API_KEY,
        "sort_by": "popularity.desc"
    }

    response = requests.get(url, params=params)

    if response.status_code == 200:
        data = response.json()
        movies = []
        for result in data.get('results', [])[:4]:
            movie_info = {
                "title": result.get('title'),
                "overview": result.get('overview'),
                "genre_id": fetch_genre_name(result.get('genre_ids', [])),
                "poster_path": result.get('poster_path')
            }
            movies.append(movie_info)
        return jsonify(movies)
    else:
        return jsonify({"error": "Failed to fetch popular movies."}), response.status_code
    
    
if __name__ == '__main__':
    app.run()
 
 
