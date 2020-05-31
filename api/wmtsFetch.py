import math, sys
def deg2num(zoom, lat_deg, lon_deg):
    xtile = ((90 - lat_deg) * ( 2 ** zoom )) // 288
    ytile =  ((180 + lon_deg) * (2 ** zoom)) // 288
    print(xtile, ytile)
    return (xtile, ytile)

deg2num(int(sys.argv[1]), int(sys.argv[2]), int(sys.argv[3]))
sys.stdout.flush()

