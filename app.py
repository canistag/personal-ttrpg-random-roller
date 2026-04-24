from flask import Flask, jsonify, render_template
import sqlite3

app = Flask(__name__)



# if url => run function
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/weather')
def get_weather():
    conn = sqlite3.connect('rollerDB')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM weather')
    rows = cursor.fetchall()
    conn.close()
    return jsonify(rows)

@app.route('/api/terrain')
def get_terrain():
    conn = sqlite3.connect('rollerDB')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM terrain')
    rows = cursor.fetchall()
    conn.close()
    return jsonify(rows)

@app.route('/api/encounter')
def get_encounterType():
    conn = sqlite3.connect('rollerDB')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM encounter')
    rows = cursor.fetchall()
    conn.close()
    return jsonify(rows)

@app.route('/api/ancientClue')
def get_ancientClue():
    conn = sqlite3.connect('rollerDB')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM ancientClue')
    rows = cursor.fetchall()
    conn.close()
    return jsonify(rows)

@app.route('/api/naturalResource')
def get_naturalResource():
    conn = sqlite3.connect('rollerDB')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM naturalResource')
    rows = cursor.fetchall()
    conn.close()
    return jsonify(rows)

@app.route('/api/race')
def get_race():
    conn = sqlite3.connect('rollerDB')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM race')
    rows = cursor.fetchall()
    conn.close()
    return jsonify(rows)

@app.route('/api/class')
def get_class():
    conn = sqlite3.connect('rollerDB')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM class')
    rows = cursor.fetchall()
    conn.close()
    return jsonify(rows)

@app.route('/api/undead')
def get_undead():
    conn = sqlite3.connect('rollerDB')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM undead')
    rows = cursor.fetchall()
    conn.close()
    return jsonify(rows)

@app.route('/api/combatant')
def get_combatant():
    conn = sqlite3.connect('rollerDB')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM combatant')
    rows = cursor.fetchall()
    conn.close()
    return jsonify(rows)

@app.route('/api/Convoy')
def get_convoy():
    conn = sqlite3.connect('rollerDB')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM Convoy')
    rows = cursor.fetchall()
    conn.close()
    return jsonify(rows)

if __name__ == '__main__':
    app.run(debug=True)

## open terminal
## type python app.py
## follow url