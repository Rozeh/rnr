from rest_framework import serializers
from .models import Rank

class RankSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Rank
        fields = ("id","text")
        # "check_time","target_post_url","temp_data", "rank")
