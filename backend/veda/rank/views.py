from rest_framework import viewsets
from .serializers import RankSerializer
from .models import Rank

class RankViewSet(viewsets.ModelViewSet):
    queryset = Rank.objects.all()
    serializer_class = RankSerializer
