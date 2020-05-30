import math, sys
def deg2num(lat_deg, lon_deg, zoom):
    lat_rad = math.radians(lat_deg)
    n = 2.0 ** zoom
    xtile = int((lon_deg + 180.0) / 360.0 * n)
    ytile = int((1.0 - math.asinh(math.tan(lat_rad)) / math.pi) / 2.0 * n)
    print(xtile, ytile)
    return (xtile, ytile)

deg2num(int(sys.argv[1]), int(sys.argv[2]), int(sys.argv[3]))
sys.stdout.flush()

