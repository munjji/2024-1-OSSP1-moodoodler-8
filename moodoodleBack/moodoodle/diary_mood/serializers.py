from rest_framework import serializers
from diary.models import Diary
from .models import Diary_Mood

class DiaryMoodCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Diary_Mood
        fields = "__all__"
    
    # def create(self, validated_data):
    #     diary = Diary_Mood.objects.create(**validated_data)
    #     return diary