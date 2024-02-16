from django.urls import path
from .views import ProfileList, ProjectList, ExperienceList, EducationList, SkillList

urlpatterns = [
    path('api/profiles/', ProfileList.as_view(), name='profile-list'),
    path('api/projects/', ProjectList.as_view(), name='project-list'),
    path('api/experiences/', ExperienceList.as_view(), name='experience-list'),
    path('api/education/', EducationList.as_view(), name='education-list'),
    path('api/skills/', SkillList.as_view(), name='skill-list'),
]
