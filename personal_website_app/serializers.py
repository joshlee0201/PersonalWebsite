from rest_framework import serializers
from .models import Profile, Project, Experience, Education, Skill

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    technologies_used = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = '__all__'

    def get_technologies_used(self, obj):
        # Technologies_used is a string of technologies separated by commas
        tech_list = obj.technologies_used.split(',')
        sorted_tech_list = sorted([tech.strip() for tech in tech_list])
        return ', '.join(sorted_tech_list)

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'
