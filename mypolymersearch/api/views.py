from rest_framework.views import APIView
from rest_framework.response import Response

class PolymerSearchView(APIView):
    def get(self, request):
        data = {
            "message": "Hello, Polymer Search!",
            "polymers": [
                {"name": "Polyethylene", "density": "0.96 g/cm³"},
                {"name": "Polypropylene", "density": "0.90 g/cm³"},
                {"name": "Polyvinyl chloride", "density": "1.3 g/cm³"},
            ]
        }
        return Response(data)
