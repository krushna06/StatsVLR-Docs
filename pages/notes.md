Here is the consolidated v1.0.0 with all the features moved:

# What's new?

## v1.0.0

### Get all events.

- `GET /api/v1/events`
  - We will obtain all the events.

### Get all matches.

- `GET /api/v1/matches`
  - We will get all the matches that are coming up.

### Get all results.

- `GET /api/v1/results`
  - We will get all the results of the matches that have been played.

### Get all teams.

- `GET /api/v1/teams`
  - We will obtain all the teams that have played recently.

### Get all players.

- `GET /api/v1/players`
  - We will be able to obtain information about all the players.

### Get information about a player.

- `GET /api/v1/players/:id`
  - We will be able to obtain information about a player just by providing its ID.

### Get information about the team.

- `GET /api/v1/teams/:id`
  - We will be able to obtain information about a team just by providing its ID, and that way, we can know its players, staff, events, results, and upcoming matches.