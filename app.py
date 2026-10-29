from flask import Flask, jsonify, render_template
import sqlite3

app = Flask(__name__)

# Tables the API is allowed to serve. The URL only gets through if it
# matches this list — table names can't be passed as SQL parameters
# so a whitelist is what keeps the query below safe
TABLES = {
    'weather': 'weather',
    'terrain': 'terrain',
    'encounter': 'encounter',
    'ancientClue': 'ancientClue',
    'naturalResource': 'naturalResource',
    'race': 'race',
    'class': 'class',
    'undead': 'undead',
    'combatant': 'combatant',
    'Convoy': 'Convoy',
}


def get_all_rows(table):
    conn = sqlite3.connect('rollerDB')
    cursor = conn.cursor()
    # `table` only ever comes from the TABLES whitelist above
    # never straight from the URL
    cursor.execute(f'SELECT * FROM {table}')
    rows = cursor.fetchall()
    conn.close()
    return rows


@app.route('/')
def index():
    return render_template('index.html')


# One route replaces the old per-table endpoints. URLs and the JSON
# shape are unchanged, so the frontend (encounters.js) works as-is
@app.route('/api/<name>')
def get_table(name):
    if name not in TABLES:
        abort(404)
    return jsonify(get_all_rows(TABLES[name]))


if __name__ == '__main__':
    app.run()
