from django.db import models

# Create your models here.
class Rank(models.Model):
    text = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now=False, auto_now_add=True)
    # target_post_url = models.URLField(null=True,default='')
    # temp_data = models.TextField(null=True,default='')
    # rank = models.IntegerField(null=True)
